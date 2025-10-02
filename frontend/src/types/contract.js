/**
 * @typedef {object} SocialMediaContractMethods
 * @property {(username: string, text: string) => Promise} createPost
 * @property {(id: number) => Promise<Post>} getPost
 * @property {() => Promise<Post[]>} getAllPosts
 */

/**
 * @typedef {import('ethers').Contract & SocialMediaContractMethods} SocialMediaContract
 */