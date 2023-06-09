import {
  SignatureFormat,
  SignatureLevel,
  SignatureType,
  SigningProcess,
} from '@utils/classes/interfaces/APIInterface';
import {CounterState} from '@src/redux/counter/Type/CouterState';
import {Constant_Navigator} from '@src/navigation/Constant_Navigator';

export const initialState: CounterState = {
  value: 0,
  Email: 'sok',
  Name: '',
  Password: '',
  DATA: [],
  GetOne: {},
  Num_cal: 0,
  AllSession: [],
  DATAofFile: {
    did: 0,
    status: 0,
    abstract: '',
    'file-name': '',
    date: '',
    expires: '',
    title: '',
  },
  DATAofSession: {
    id: 0,
    status: 0,
    ttl: Constant_Navigator.TTL,
    date: '',
    expires: '',
    actors: [],
    documents: [],
    scenarios: [],
  },
  DATAofActor: {
    id: 0,
    name: '',
    aid: 0,
    type: 0,
    roles: [],
    'adm-id': '',
    'first-name': '',
    country: '',
    login: '',
    email: '',
    mobile: '',
    'manifest-data': {},
    'user-data': {},
    date: '',
  },
  DataScenario: {},
  Doc_Approve: {
    otp: '',
    signatures: [
      {
        actor: '',
        document: '',
        tag: '',
        signatureId: '',
      },
    ],
    threadId: '',
  },
  Data_cgu: {
    actor: '',
    authority: '',
    'download-url': '',
    session: '',
    token: '',
    version: '',
  },
  Data_certificate: {date: '', expires: '', url: ''},
  doc_ng: '',
  actor_ng: '',
  cert_ng: '',
  Data_signature: {
    signatures: [{tag: ' ', signatureId: ' ', actor: ' ', document: ' '}],
    threadId: ' ',
    token: ' ',
  },
  checkEndOrNot: true,
  AllFileUpload: {uploads: ['']},
  ForSign: {
    Actor: '',
    Document: '',
    IdSession: '',
    Certificate: '',
  },
  IsSubmitOTP: false,
  SourcePDF: '',
  BlurScreen: false,
  FileBase64: '',
  FileType: '',
  IsMultipleSign: false,
  FileNamePicker: '',
  DocInSession: [],
  LoadingState: false,
  ForScenarioProcess: {
    documents: [''],
    steps: [
      {
        process: SigningProcess.Cosign,
        steps: [''],
        signatureType: SignatureType.Envelopped,
        cardinality: 'all',
      },
    ],
    level: SignatureLevel.B,
    format: SignatureFormat.PAdES,
  },
  IsScenarioInput: false,
  IsServer: false,
  DocTye: {
    IsManifest: false,
    IsOnTheFly: false,
    IsSimple: true,
  },
};
