<p align="center">
  <img src="./assets/img/logo.png" width="50%" alt="FondosCDBG-DR" />
</p>

  
<p align="center">This FondosCDBG-DR API provides allocation data from the United States Department of Housing and Urban Development (HUD), available when the President declares a major disaster and there are significant unmet needs for long-term recovery.</p>
<p align="center">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />          
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/FondosCDBG_DR-API-brightgreen.svg"/>
</p>

<br/><br/><br/><br/>

## What is CDBG-DR?
It is an allocation of funds from the United States Department of Housing and Urban Development (HUD), available when the President declares a major disaster and there are significant unmet needs for long-term recovery.

## Who administers it?
The Puerto Rico Department of Housing has been designated as the entity responsible for managing the funds that will help the island recover from the disasters caused by Hurricanes Irma and Maria in 2017.


## How will CDBG-DR funds be managed?
To invest in a more secure and resilient society, and to achieve a transparent and planned distribution, the funds granted by CDBG-DR will be divided into 4 main categories:
- [x] Living place
- [x] Planning
- [x] Economic development


## What are the main objectives of CDBG-DR programs?
All CDBG-DR supported programs provided by HUD must meet one of the program's national objectives:
- [x] Benefit people from low to moderate economic resources.
- [x] Help in the prevention or elimination of deteriorating areas.
- [x] Meet an urgent need.


## 🚨 Project in premature state 🚨
Project started, and in development process. More information in the next days / weeks.


## 📜 API Documentation


# Finance
### PackageManager.reports()
The following section contains information on the performance reports that have been made for CDBG-DR funds.

```json
[
  {
    "table": [
      {
        "nombre_del_reporte": "Contract Report 10-1-2018 to 12-31-2018",
        "fecha_de_publicación": "01/31/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/contract-report-10-1-2018-to-12-31-2018/"
      },
      {
        "nombre_del_reporte": "QPR 12-31-2019 Reviewed and Approved 3-4-2020",
        "fecha_de_publicación": "03/05/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/qpr-12-31-2019-reviewed-and-approved-3-4-2020/"
      },
      {
        "nombre_del_reporte": "QPR 9-30-2019 Reviewed and Approved 2-5-2020",
        "fecha_de_publicación": "02/05/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/qpr-9-30-2019-reviewed-and-approved-2-5-2020/"
      },
      {
        "nombre_del_reporte": "QPR Amended-Await for review Period 10-1-2018 to 12-31-2018",
        "fecha_de_publicación": "02/25/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/qpr-amended-await-for-review-period-10-1-2018-to-12-31-2018/"
      },
      // .....
    ]
  }
]
```

### PackageManager.DRGRActionPlan()
DRGR Action Plan Documents

```json
[
  {
    "table": [
      {
        "nombre_del_documento": "1.5 and 1.7 Billion Action Plan Download Submitted – Await for Review 4.9.2020",
        "fecha_de_publicacion": "04/14/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/billion-action-plan-download-submitted-await-for-review-4-9-2020/"
      },
      {
        "nombre_del_documento": "Action Plan – 3rd NonSubstantial Reviewed and Approved 03-30-2020",
        "fecha_de_publicacion": "03/30/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/action-plan-3rd-nonsubstantial-reviewed-and-approved-03-30-2020/"
      },
      {
        "nombre_del_documento": "Action Plan – Non Substantial 1 Reviewed and Approved 10-8-2019",
        "fecha_de_publicacion": "10/18/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/action-plan-non-substantial-1-reviewed-and-approved-10-8-2019/"
      }
    ]
  }
]
```

# Contracts
### PackageManager.contracts()
Data related to the contracts that have materialized under the CDBG-DR Funds.

```json
[
  {
    "table": [
      {
        "nombre_de_contratista": "Action Service Corporation",
        "solicitado_por": "Departamento de la Vivienda (DV)",
        "fecha_de_ejecucion": "2019-11-21",
        "cantidad_total": "N/A",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/action-service-corporation-2/"  
      },
      {
        "nombre_de_contratista": "Action Service Corporation",
        "solicitado_por": "Departamento de la Vivienda (DV)",
        "fecha_de_ejecucion": "2019-07-17",
        "cantidad_total": "$55,684.80",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/action-service-corporation/"    
      },
      {
        "nombre_de_contratista": "Aecom Technical Services",
        "solicitado_por": "Departamento de la Vivienda (DV)",
        "fecha_de_ejecucion": "2019-07-16",
        "cantidad_total": "$22,384,943.00",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/aecom-technical-services/"      
      },
      {
        "nombre_de_contratista": "Alliance for the Recovery of Puerto Rico",
        "solicitado_por": "Departamento de la Vivienda (DV)",
        "fecha_de_ejecucion": "2019-07-12",
        "cantidad_total": "$22,693,267.78",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/alliance-for-the-recovery-of-puerto-rico/"
      },
      {
        "nombre_de_contratista": "ANG Construction Inc.",
        "solicitado_por": "Departamento de la Vivienda (DV)",
        "fecha_de_ejecucion": "2019-11-22",
        "cantidad_total": "$15,000,000.00",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/ang-construction-inc/"
      },
      // .....
    ]
  }
]
```

# Contractors
The following data groups all contractors working for the CDBG-DR funds Repair, Reconstruction or Relocation (R3) Program.

## Construction Managers
### PackageManager.constructionManagers()
<p align="center">
  <img src="./assets/img/gerentes_de_contruccion_mapa.JPG" width="60%" alt="Gerentes de Construccion Mapa" />
</p>

```json
[
  {
    "table": [
      {
        "gerentes_de_construccion": "ANG",
        "nombre": "Dilia Gonzalez",
        "correo_electronico": "d.gonzalez@angpr.com",
        "numero_de_contacto": "787-439-7891",
        "sitio_web": "www.angpr.com"
      },
      {
        "gerentes_de_construccion": "Thompson",
        "nombre": "Bob Roberts",
        "correo_electronico": "broberts@thompsonind.com",
        "numero_de_contacto": "939-545-0527",
        "sitio_web": "www.thompsonind.com"
      },
      {
        "gerentes_de_construccion": "Yates-Bird",
        "nombre": "Recursos Humanos",
        "correo_electronico": "cdbg-info@yatesbirdllc.com",
        "numero_de_contacto": "228-271-3598",
        "sitio_web": "www.yatesbirdllc.com"
      },
      {
        "gerentes_de_construccion": "Lemoine",
        "nombre": "Recursos Humanos",
        "correo_electronico": "Careers@lemoinedr.com",
        "numero_de_contacto": "1-833-536-6463 (1-833-LEMOINE)",
        "sitio_web": "www.lemoinedr.com"
      },
      // .....
    ]
  }
]
```


## Program Managers
### PackageManager.programManagers()
<p align="center">
  <img src="./assets/img/gerentes_de_programa_mapa.JPG" width="60%" alt="Gerentes de Programa Mapa" />
</p>

```json
[
  {
    "table": [
      {
        "gerentes_de_programas": "Alliance for PR",
        "nombre": "Recursos Humanos",
        "correo_electronico": "jobs@allianceforpr.com",
        "numero_de_contacto": "1-800-570-8218",
        "sitio_web": "www.allianceforpr.com"
      },
      {
        "gerentes_de_programas": "AECOM",
        "nombre": "Luis Torres",
        "correo_electronico": "luis.torres@teamaecompr.com",
        "numero_de_contacto": "787-705-4410",
        "sitio_web": "www.teamaecompr.com"
      },
      {
        "gerentes_de_programas": "ICF",
        "nombre": "Adriana Brockman",
        "correo_electronico": "Adriana.brockman@icf.com",
        "numero_de_contacto": "703-934-3000",
        "sitio_web": "www.icf.com/careers"
      },
      {
        "gerentes_de_programas": "IEM",
        "nombre": "Rafael Torres",
        "correo_electronico": "Rafael.Torres@iempr.net",
        "numero_de_contacto": "787-229-6262",
        "sitio_web": "www.iempr.net"
      }
    ]
  }
]
```

# Auctions and NOFAs
The following section outlines the open and closed auctions that have been conducted under the CDBG-DR funds.

## Purchases
### PluginManager.purchases()

```json
[
  {
    "table": [
      {
        "nombre_de_la_compra": "Compra de equipos para conferencia",
        "entidad_solicitante": "Departamento de la Vivienda",
        "descripcion": "Solicitud de cotizaciones para la compra de equipos para conferencia",
        "fecha_de_envio_de_cotizaciones": "2020-05-25",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/compra-de-equipos-para-conferencia/"
      }
    ]
  }
]
```

## Fund Opportunities
### PluginManager.fundOpportunities()

```json
[
  {
    "table": [
      {
        "nombre_del_documento": "Aviso de Disponibilidad de Fondos de MRP",
        "fecha_de_publicacion": "11/22/2019",
        "categoria": "Planificación",
        "descargar_doc": "https://cdbg-dr.pr.gov/oportunidades-de-fondo/?wpdmc=planificacion-fondos"
      },
      {
        "nombre_del_documento": "Aviso de Disponibilidad de Fondos para el Programa de Capacitación Laboral",
        "fecha_de_publicacion": "03/30/2020",
        "categoria": "Economía",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/aviso-de-disponibilidad-de-fondos-de-mrp/"
      },
      {
        "nombre_del_documento": "Aviso de Disponibilidad de Fondos para el Programa de Incubadoras y Aceleradoras de Pequeñas Empresas",
        "fecha_de_publicacion": "03/26/2020",
        "categoria": "Economía",
        "descargar_doc": "https://cdbg-dr.pr.gov/oportunidades-de-fondo/?wpdmc=economia-fondos"
      },
      {
        "nombre_del_documento": "Aviso del Disponibilidad de Fondos para el Programa de Asesoría de Vivienda",
        "fecha_de_publicacion": "09/23/2019",
        "categoria": "Vivienda",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/aviso-de-disponibilidad-de-fondos-para-el-programa-de-capacitacion-laboral/"
      }
    ]
  }
]
```


# Programs
The following section contains descriptive information about the programs that operate under the CDBG-DR Funds.

## Programs
### PluginManager.programs()

```json
[
  {
    "table": [
      {
        "programa": "Hipoteca al Día **** NO FUE APROBADO POR HUD",
        "asignacion": "$0",
        "fecha_de_publicacion": "02/21/2019",
        "tipo_de_programa": "Vivienda",
        "descargar_doc": "https://cdbg-dr.pr.gov/programas/?wpdmc=vivienda"
      },
      {
        "programa": "Programa Brecha de CDBG-DR de los Créditos Contributivos de Vivienda por Ingresos Bajos",
        "asignacion": "$413,000,000",
        "fecha_de_publicacion": "07/31/2019",
        "tipo_de_programa": "Vivienda",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/hipoteca-al-dia-no-fue-aprobado-por-hud/"
      },
      {
        "programa": "Programa de Asesoría De Vivienda",
        "asignacion": "$17,500,000",
        "fecha_de_publicacion": "07/31/2019",
        "tipo_de_programa": "Vivienda",
        "descargar_doc": "https://cdbg-dr.pr.gov/programas/?wpdmc=vivienda"
      },
      {
        "programa": "Programa de Asistencia Directa al Comprador",
        "asignacion": "$350,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "tipo_de_programa": "Vivienda",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-brecha-de-cdbg-dr-de-los-creditos-contributivos-de-vivienda-por-ingresos-bajos/"
      },
      {
        "programa": "Programa de Autorización de Títulos",
        "asignacion": "$40,000,000",
        "fecha_de_publicacion": "07/31/2019",
        "tipo_de_programa": "Vivienda",
        "descargar_doc": "https://cdbg-dr.pr.gov/programas/?wpdmc=vivienda"
      },
      {
        "programa": "Programa de Capacitación Laboral",
        "asignacion": "$40,000,000",
        "fecha_de_publicacion": "03/26/2020",
        "tipo_de_programa": "Economía",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-asesoria-de-vivienda/"
      },
      // .....
    ]
  }
]
```

## Planning
### PluginManager.planning()

```json
[
  {
    "table": [
      {
        "programa": "Programa de Iniciativas de Planificación de Agencias",
        "asignacion": "$50,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-iniciativas-de-planificacion-de-agencias/"
      },
      {
        "programa": "Programa de Planificación para la Recuperación Económica",
        "asignacion": "$0",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-planificacion-para-la-recuperacion-economica/"
      },
      {
        "programa": "Programa de Planificación para la Recuperación Municipal",
        "asignacion": "$39,000,000",
        "fecha_de_publicacion": "09/18/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/recuperacion-municipal/"
      },
      {
        "programa": "Programa para la Competencia de Innovación de Resiliencia en el Hogar",
        "asignacion": "$5,750,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-para-la-competencia-de-innovacion-de-resiliencia-en-el-hogar/"
      },
      {
        "programa": "Programa Planificación Integral de la Resiliencia Comunitaria",
        "asignacion": "$55,000,000",
        "fecha_de_publicacion": "09/11/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-planificacion-integral-de-la-resiliencia-comunitaria/"
      }
    ]
  }
]
```

## Living Place
### PluginManager.livingPlace()

```json
[
  {
    "table": [
      {
        "programa": "Hipoteca al Día **** NO FUE APROBADO POR HUD",
        "asignacion": "$0",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/hipoteca-al-dia-no-fue-aprobado-por-hud/"
      },
      {
        "programa": "Programa Brecha de CDBG-DR de los Créditos Contributivos de Vivienda por Ingresos Bajos",
        "asignacion": "$413,000,000",
        "fecha_de_publicacion": "07/31/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-brecha-de-cdbg-dr-de-los-creditos-contributivos-de-vivienda-por-ingresos-bajos/"
      },
      {
        "programa": "Programa de Asesoría De Vivienda",
        "asignacion": "$17,500,000",
        "fecha_de_publicacion": "07/31/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-asesoria-de-vivienda/"
      },
      {
        "programa": "Programa de Asistencia Directa al Comprador",
        "asignacion": "$350,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-asistencia-directa-al-comprador/"
      },
      // .....
    ]
  }
]
```

## Economy
### PluginManager.economy()

```json
[
  {
    "table": [
      {
        "programa": "Programa de Capacitación Laboral",
        "asignacion": "$40,000,000",
        "fecha_de_publicacion": "03/26/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-capacitacion-laboral/"
      },
      {
        "programa": "Programa de Cartera de Inversión en Desarrollo Económico para el Crecimiento",
        "asignacion": "$800,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-cartera-de-inversion-en-desarrollo-economico-para-el-crecimiento/"
      },
      {
        "programa": "Programa de Financiamiento para Pequeñas Empresas",
        "asignacion": "$225,000,000",
        "fecha_de_publicacion": "03/13/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-financiamiento-para-pequenas-empresas/"
      },
      // .....
    ]
  }
]
```

## Infrastructure
### PluginManager.infrastructure()

```json
[
  {
    "table": [
      {
        "programa": "Programa de Centros de Resiliencia Comunitaria",
        "asignacion": "$75,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-centros-de-resiliencia-comunitaria/"
      },
      {
        "programa": "Programa de Pareo de Partidas No Federal",
        "asignacion": "$1,000,000,000",
        "fecha_de_publicacion": "09/11/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-pareo-de-partidas-no-federal/"
      },
      {
        "programa": "Programa de Resiliencia de la Infraestructura Crucial",
        "asignacion": "$400,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-de-resiliencia-de-la-infraestructura-crucial/"
      }
    ]
  }
]
```

## Multisectoral
### PluginManager.multisectoral()

```json
[
  {
    "table": [
      {
        "programa": "Programa de Revitalización de la Ciudad",
        "asignacion": "$1,223,000,000",
        "fecha_de_publicacion": "03/09/2020",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/revitalizacion-de-la-ciudad/"
      },
      {
        "programa": "Programa Puerto Rico se Diseña",
        "asignacion": "$300,000,000",
        "fecha_de_publicacion": "02/21/2019",
        "descargar_doc": "https://cdbg-dr.pr.gov/download/programa-puerto-rico-se-disena/"
      }
    ]
  }
]
```

## <img src="https://img.icons8.com/color/48/000000/paypal.png"> **Donations**
FondosCDBG-DR API is an open source project licensed by MIT with continuous development. If you want me to continue maintaining this library and you are interested in continuing to use it, you can help me with a monetary help in the following link:


- [One-time donation via PayPal.](https://paypal.me/chrismperezsantiago?locale.x=en_US)

<a href="https://www.buymeacoffee.com/chrismichael" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

These are projects that take a lot of effort and time to maintain. So with your help I will be more motivated to continue maintaining the FondosCDBG-DR API project.


## 💡 References
- *cdbg-dr.pr.gov 2020. (FondosCDBG-DR) Departamento de la Vivienda. [online] Available at: <https://cdbg-dr.pr.gov/> [Accessed 29 April 2020].*




## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [COVID19 Fondos CDBG-DR API](https://github.com/ChrisMichaelPerezSantiago/FondosCDBG-DR-api).
