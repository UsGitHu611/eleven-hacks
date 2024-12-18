// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';
import {elevenlabs} from '../models';

export function AddDubbingFile(arg1:main.Token):Promise<void>;

export function ChooseFiles():Promise<Array<string>>;

export function GetLanguages():Promise<{[key: string]: string}>;

export function GetTorPath():Promise<string>;

export function RegisterAndConfirmAccount(arg1:string):Promise<elevenlabs.ApiKeyResponse>;

export function SetSavePath():Promise<string>;

export function SetTorPath():Promise<string>;

export function StartDubbing(arg1:string,arg2:string):Promise<void>;

export function UpdateBridge(arg1:string):Promise<void>;
