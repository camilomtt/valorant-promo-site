import { publicKeyPem} from './constants';

const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

export function encodeData (data) {
  const dataEncoded = {}

  for (const [key, value] of Object.entries(data)) {
    const encrypted = forge.util.encode64(publicKey.encrypt((value), 'RSA-OAEP', { md: forge.md.sha256.create(), mgf1: forge.mgf.mgf1.create(forge.md.sha256.create()) }))
    dataEncoded[key] = encrypted
  }

  return dataEncoded
}