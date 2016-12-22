/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v8.1.6192.40777 (NJsonSchema v6.6.6192.39835) (http://NSwag.org)
// </auto-generated>
//----------------------

import { Component } from '@angular/core';

export module GeneratedModels {

    export interface IClient {
        /**
         * @return Success
         */
        apiValuesGet(onSuccess?: (result: string[]) => void, onFail?: (exception: string, reason: string) => void): void;
        /**
         * @value (optional) 
         * @return Success
         */
        apiValuesPost(value: string, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void): void;
        /**
         * @return Success
         */
        apiValuesByIdGet(id: number, onSuccess?: (result: string) => void, onFail?: (exception: string, reason: string) => void): void;
        /**
         * @value (optional) 
         * @return Success
         */
        apiValuesByIdPut(id: number, value: string, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void): void;
        /**
         * @return Success
         */
        apiValuesByIdDelete(id: number, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void): void;
    }

    export class Client implements IClient {
        baseUrl: string = undefined;
        beforeSend: any = undefined;
        protected jsonParseReviver: (key: string, value: any) => any = undefined;

        constructor(baseUrl?: string) {
            this.baseUrl = baseUrl !== undefined ? baseUrl : "";
        }

        /**
         * @return Success
         */
        apiValuesGet(onSuccess?: (result: string[]) => void, onFail?: (exception: string, reason: string) => void) {
            let url_ = this.baseUrl + "/api/Values";

            const content_ = "";

            jQuery.ajax({
                url: url_,
                beforeSend: this.beforeSend,
                type: "get",
                data: content_,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done((data, textStatus, xhr) => {
                this.processApiValuesGetWithCallbacks(url_, xhr, onSuccess, onFail);
            }).fail((xhr) => {
                this.processApiValuesGetWithCallbacks(url_, xhr, onSuccess, onFail);
            });
        }

        private processApiValuesGetWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any): void {
            try {
                let result = this.processApiValuesGet(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            } catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        }

        protected processApiValuesGet(xhr: any): string[] {
            const responseText = xhr.responseText;
            const status = xhr.status;

            if (status === 200) {
                let result200: string[] = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(item);
                }
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        }

        /**
         * @value (optional) 
         * @return Success
         */
        apiValuesPost(value: string, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
            let url_ = this.baseUrl + "/api/Values";

            const content_ = JSON.stringify(value);

            jQuery.ajax({
                url: url_,
                beforeSend: this.beforeSend,
                type: "post",
                data: content_,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done((data, textStatus, xhr) => {
                this.processApiValuesPostWithCallbacks(url_, xhr, onSuccess, onFail);
            }).fail((xhr) => {
                this.processApiValuesPostWithCallbacks(url_, xhr, onSuccess, onFail);
            });
        }

        private processApiValuesPostWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any): void {
            try {
                let result = this.processApiValuesPost(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            } catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        }

        protected processApiValuesPost(xhr: any): void {
            const responseText = xhr.responseText;
            const status = xhr.status;

            if (status === 200) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        }

        /**
         * @return Success
         */
        apiValuesByIdGet(id: number, onSuccess?: (result: string) => void, onFail?: (exception: string, reason: string) => void) {
            let url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));

            const content_ = "";

            jQuery.ajax({
                url: url_,
                beforeSend: this.beforeSend,
                type: "get",
                data: content_,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done((data, textStatus, xhr) => {
                this.processApiValuesByIdGetWithCallbacks(url_, xhr, onSuccess, onFail);
            }).fail((xhr) => {
                this.processApiValuesByIdGetWithCallbacks(url_, xhr, onSuccess, onFail);
            });
        }

        private processApiValuesByIdGetWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any): void {
            try {
                let result = this.processApiValuesByIdGet(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            } catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        }

        protected processApiValuesByIdGet(xhr: any): string {
            const responseText = xhr.responseText;
            const status = xhr.status;

            if (status === 200) {
                let result200: string = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        }

        /**
         * @value (optional) 
         * @return Success
         */
        apiValuesByIdPut(id: number, value: string, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
            let url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));

            const content_ = JSON.stringify(value);

            jQuery.ajax({
                url: url_,
                beforeSend: this.beforeSend,
                type: "put",
                data: content_,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done((data, textStatus, xhr) => {
                this.processApiValuesByIdPutWithCallbacks(url_, xhr, onSuccess, onFail);
            }).fail((xhr) => {
                this.processApiValuesByIdPutWithCallbacks(url_, xhr, onSuccess, onFail);
            });
        }

        private processApiValuesByIdPutWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any): void {
            try {
                let result = this.processApiValuesByIdPut(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            } catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        }

        protected processApiValuesByIdPut(xhr: any): void {
            const responseText = xhr.responseText;
            const status = xhr.status;

            if (status === 200) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        }

        /**
         * @return Success
         */
        apiValuesByIdDelete(id: number, onSuccess?: () => void, onFail?: (exception: string, reason: string) => void) {
            let url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));

            const content_ = "";

            jQuery.ajax({
                url: url_,
                beforeSend: this.beforeSend,
                type: "delete",
                data: content_,
                dataType: "text",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }).done((data, textStatus, xhr) => {
                this.processApiValuesByIdDeleteWithCallbacks(url_, xhr, onSuccess, onFail);
            }).fail((xhr) => {
                this.processApiValuesByIdDeleteWithCallbacks(url_, xhr, onSuccess, onFail);
            });
        }

        private processApiValuesByIdDeleteWithCallbacks(url: string, xhr: any, onSuccess?: any, onFail?: any): void {
            try {
                let result = this.processApiValuesByIdDelete(xhr);
                if (onSuccess !== undefined)
                    onSuccess(result);
            } catch (e) {
                if (onFail !== undefined)
                    onFail(e, "http_service_exception");
            }
        }

        protected processApiValuesByIdDelete(xhr: any): void {
            const responseText = xhr.responseText;
            const status = xhr.status;

            if (status === 200) {
                return null;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        }

        protected throwException(message: string, status: number, response: string, result?: any): any {
            if (result !== null && result !== undefined)
                throw result;
            else
                throw new SwaggerException(message, status, response);
        }
    }


    export class SwaggerException extends Error {
        message: string;
        status: number;
        response: string;
        result?: any;

        constructor(message: string, status: number, response: string, result?: any) {
            super();

            this.message = message;
            this.status = status;
            this.response = response;
            this.result = result;
        }
    }

}