export default async function handler (req, res) {
  const { url } = req.body
  const shortUrl = Math.random()
    .toString(36)
    .substr(2, 6)

  res.status(200).send({ url, shortUrl })
}