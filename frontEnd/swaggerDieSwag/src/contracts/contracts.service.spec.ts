import { TestBed, getTestBed, async } from '@angular/core/testing';
import { ContractsService } from './contracts.service';
import { Http } from '@angular/Http';

describe('Service: ContractsService', () => {
    // ...variable declarations

    let testbed : TestBed, service : ContractsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ContractsService,
                Http
            ]
        });

        testbed = getTestBed();
        service = testbed.get(ContractsService);
    });

    it('must return a contract that matches the local one', function() {
        let ForeignContract : string;
        let localContract : string;

        this.ContractsService
			.GetContract()
			.subscribe(contract => {
				ForeignContract = contract;
			});
        
        localContract = '{"swagger":"2.0","info":{"version":"v1","title":"API V1"},"basePath":"/","paths":{"/api/Values":{"get":{"tags":["Values"],"operationId":"ApiValuesGet","consumes":[],"produces":["text/plain","application/json","text/json"],"responses":{"200":{"description":"Success","schema":{"type":"array","items":{"type":"string"}}}},"deprecated":false},"post":{"tags":["Values"],"operationId":"ApiValuesPost","consumes":["application/json","text/json","application/json-patch+json"],"produces":[],"parameters":[{"name":"value","in":"body","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}},"deprecated":false}},"/api/Values/{id}":{"get":{"tags":["Values"],"operationId":"ApiValuesByIdGet","consumes":[],"produces":["text/plain","application/json","text/json"],"parameters":[{"name":"id","in":"path","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"Success","schema":{"type":"string"}}},"deprecated":false},"put":{"tags":["Values"],"operationId":"ApiValuesByIdPut","consumes":["application/json","text/json","application/json-patch+json"],"produces":[],"parameters":[{"name":"id","in":"path","required":true,"type":"integer","format":"int32"},{"name":"value","in":"body","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}},"deprecated":false},"delete":{"tags":["Values"],"operationId":"ApiValuesByIdDelete","consumes":[],"produces":[],"parameters":[{"name":"id","in":"path","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"Success"}},"deprecated":false}}},"definitions":{},"securityDefinitions":{}}';

        expect(ForeignContract).toBe(localContract);
    });
});