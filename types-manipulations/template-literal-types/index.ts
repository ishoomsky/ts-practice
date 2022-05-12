type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';


type uppercasedAccess = `can${Uppercase<ReadOrWrite>}`;
type camelcasedAccess = `can${Capitalize<ReadOrWrite>}`;

type AccessWithBulk = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}` 

type ErrorOrSuccess = 'error' | 'success';

type responseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`
}

const resp: responseT = {
  result: 'httpError'
}