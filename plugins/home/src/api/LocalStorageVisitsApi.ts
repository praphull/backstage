/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { IdentityApi } from '@backstage/core-plugin-api';
import { Visit } from './VisitsApi';
import { VisitsApiFactory } from './VisitsApiFactory';

/** @public */
export type LocalStorageVisitsApiOptions = {
  limit?: number;
  identityApi: IdentityApi;
};

/**
 * @public
 * This is a reference implementation of VisitsApi using window.localStorage.
 */
export class LocalStorageVisitsApi extends VisitsApiFactory {
  private readonly localStorage = window.localStorage;
  private readonly storageKeyPrefix = '@backstage/plugin-home:visits';
  private readonly identityApi: IdentityApi;

  static create(options: LocalStorageVisitsApiOptions) {
    return new LocalStorageVisitsApi(options);
  }

  private constructor(options: LocalStorageVisitsApiOptions) {
    super({ limit: options.limit ?? 100 });
    this.identityApi = options.identityApi;
    this.retrieveAll = async (): Promise<Array<Visit>> => {
      let visits: Array<Visit>;
      const { userEntityRef } = await this.identityApi.getBackstageIdentity();
      const storageKey = `${this.storageKeyPrefix}:${userEntityRef}`;

      try {
        visits = JSON.parse(this.localStorage.getItem(storageKey) ?? '[]');
      } catch {
        visits = [];
      }
      return visits;
    };
    this.persistAll = async (visits: Array<Visit>) => {
      const { userEntityRef } = await this.identityApi.getBackstageIdentity();
      const storageKey = `${this.storageKeyPrefix}:${userEntityRef}`;

      return this.localStorage.setItem(
        storageKey,
        JSON.stringify(visits.splice(0, this.limit)),
      );
    };
  }
}
