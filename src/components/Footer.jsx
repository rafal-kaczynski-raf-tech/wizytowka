function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>&copy; {year} Rafał Kaczyński &ndash; RafTech Solutions</span>
        <span>Node.js &middot; NestJS &middot; AI / LangGraph &middot; React Native &middot; Angular</span>
      </div>
    </footer>
  )
}

export default Footer
