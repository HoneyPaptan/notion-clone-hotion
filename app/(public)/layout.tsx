const PublicLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="dark:bg-[#1f1f1f]">
            <main className="h-full">
                {children}

            </main>
        </div>
     );
}
 
export default PublicLayout;