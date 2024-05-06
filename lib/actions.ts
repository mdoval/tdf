import prisma from '@/db/prisma'

export async function obtenerDatos(query: string) {    
    try {
        const datos: IAtm[] = 
            await prisma.$queryRaw`SELECT atms.Sucursal, 
                                        atms.ATM, 
                                        tdf.REM1, 
                                        tdf.REM2, 
                                        tdf.REM3, 
                                        tdf.REM4, 
                                        tdf.REMANENTE 
                                        FROM tdf 
                                        join atms on tdf.ATM = atms.ATM
                                        WHERE atms.SUCURSAL = ${query}
                                        ORDER BY atms.Sucursal, sucursal`
        return datos
    } catch(error) {
        console.log(error)
    }
}