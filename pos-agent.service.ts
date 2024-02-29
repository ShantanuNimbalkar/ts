
import { data } from 'jquery';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api-service/api.service';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { AESEncryptDecryptService } from '../../services/cryptoJS/aesencrypt-decrypt';



@Injectable()
export class PosAgentService {

    constructor(
        private _apiService: ApiService,
        private rootCommonService: CommonService,
        private _AESEncryptDecryptService: AESEncryptDecryptService
    ) {


    }

    public postAgentData(postAgentdata?: any): Observable<any> {
        const url = `${environment.serviceHost}/posp/lead/data/upload?${(new Date()).getTime()}`;
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('encType', 'multipart/form-data');
        headers.append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0');
        headers.append('Pragma', 'no-cache');
        headers.append('Expires', '0');
        headers.append('Content-Type', 'text/json');
        return this._apiService.create(url, postAgentdata, headers);
    }

    public getAgentData(number?: any): Observable<any> {
        const url = `${environment.serviceHost}/posp/lead/data?mobileNumber=${number}&${(new Date()).getTime()}`;
        return this._apiService.read(url);
    }

    public pincode(pinNum?: any): Observable<any> {
        const url = `${environment.serviceHost}/pincode/details?pincode=${pinNum}&visitorId=${this.rootCommonService.getCookie('visitorId')}&${(new Date()).getTime()}`;
        // const url = `${environment.serviceHost}/pincode/details?pincode=${pinNum}&${(new Date()).getTime()}`;
        return this._apiService.read(url);
    }

    public getStateByCity(cityName?: any): Observable<any> {
        const url = `${environment.serviceHost}/cities/rtocode?cityName=${cityName}&visitorId=${this.rootCommonService.getCookie('visitorId')}&${(new Date()).getTime()}`;
        // const url = `${environment.serviceHost}/cities/rtocode?cityName=${cityName}&${(new Date()).getTime()}`;
        return this._apiService.read(url);
    }

    public getStateInfo(pinNum?: any): Observable<any> {
        const url = `${environment.serviceHost}/state/${pinNum}?${(new Date()).getTime()}`;
        return this._apiService.read(url);
    }

    public validateBank(ifsc?: any): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        const url = `${environment.serviceHost}/posp/bank/details/ifsc/code?locale=en-EN&${(new Date()).getTime()}`;
        return this._apiService.create(url, ifsc, headers);
    }

    public getOtp(number?: any): Observable<any> {
        const getOtpData = {
            mobileNumber: this._AESEncryptDecryptService.encrypt(number.toString())
        }
        const url = `${environment.serviceHost}/v1/generate/otp?${(new Date()).getTime()}`;

        return this._apiService.create(url, getOtpData);
    }

    public validateOtp(otp?: any, mobileNumber?: any): Observable<any> {
        const url = `${environment.serviceHost}/v2/common/validate/otp?isNewOtpCall=true&${(new Date()).getTime()}`;
        const validateOtpData: any = {
            mobileNumber: this._AESEncryptDecryptService.encrypt(mobileNumber.toString()),
            otp: this._AESEncryptDecryptService.encrypt(otp.toString())
        }
        return this._apiService.create(url, validateOtpData, { observe: 'response' });
    }

    // Convex API
    public convexPos(convexPosData): Observable<any> {
        const url = `${environment.serviceHost}/convox/senddata/agent?${(new Date()).getTime()}`;
        return this._apiService.create(url, convexPosData);
    }

    // PAN card validation service
    public getPANDetails(getPANDetailsData: any): Observable<any> {
        const url = `${environment.serviceHost}/v2/validate/panNo`;
        return this._apiService.create(url, getPANDetailsData, { observe: 'response' });
    }

    // Get RM code details
    public getRMData(rmCode?: any): Observable<any> {
        const url = `${environment.serviceHost}/posp?rmCode=${rmCode}&${(new Date()).getTime()}`;
        return this._apiService.read(url);
    }

    // Make Search 4W,
    public searchMake(make: any): Observable<any> {
        const url = `${environment.serviceHost}/variant/match/make_model/${make}`;
        return this._apiService.read(url);
    }

    // Make Search 2W,
    public search2WMake(make: any): Observable<any> {
        const url = `${environment.serviceHost}/bike/variant/match/make_model/${make}`;
        return this._apiService.read(url);
    }

    public panCardSaveInit(panNum: any): Observable<any> {
        const url = `${environment.serviceHost}/save/pan`;
        return this._apiService.create(url, { 'panNumber': panNum });
    }

    public panCardStatusUpdate(panData: any): Observable<any> {
        const url = `${environment.serviceHost}/fetch/pan/status`;
        return this._apiService.create(url, panData);
    }

    public bankInfoSaveInit(bankData: any): Observable<any> {
        const url = `${environment.serviceHost}/bank/accountnumber/validation?${new Date().getTime()}`;
        return this._apiService.create(url, bankData, { observe: 'response' });
    }

    public panValidation(panValidationData: any): Observable<any> {
        const url = `${environment.serviceHost}/posp/validate/mobile/pan?${+new Date()}`;
        return this._apiService.create(url, panValidationData, { observe: 'response' });
    }

}