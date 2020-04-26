---
title: ServerMetricsSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ServerMetricsSettings](#constructor-0)**() |
| **[ServerMetricsSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ServerMetricsSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "reportName" >}} | string |
| {{< prop "enabled" >}} | bool |
| {{< prop "dbxReportEnabled" >}} | bool |
| {{< prop "tickTelemetryEnabled" >}} | bool |
| {{< prop "developmentTelemetryEnabled" >}} | bool |
| {{< prop "performanceTelemetryEnabled" >}} | bool |
| {{< prop "juiceTelemetryEnabled" >}} | bool |
| {{< prop "performanceProfileStateEnabled" >}} | bool |
| {{< prop "transactionTelemetryEnabled" >}} | bool |
| {{< prop "compressTransactions" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ServerMetricsSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ServerMetricsSettings {#constructor-0}

> **ServerMetricsSettings**()

Creates a new [ServerMetricsSettings](/vext/ref/fb/servermetricssettings) frostbite instance.

### ServerMetricsSettings {#constructor-1}

> **ServerMetricsSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ServerMetricsSettings](/vext/ref/fb/servermetricssettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ServerMetricsSettings {#constructor-2}

> **ServerMetricsSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ServerMetricsSettings](/vext/ref/fb/servermetricssettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ServerMetricsSettings](/vext/ref/fb/servermetricssettings). |

## Properties

### {{% prop-heading "reportName" %}}

> **string**

### {{% prop-heading "enabled" %}}

> **bool**

### {{% prop-heading "dbxReportEnabled" %}}

> **bool**

### {{% prop-heading "tickTelemetryEnabled" %}}

> **bool**

### {{% prop-heading "developmentTelemetryEnabled" %}}

> **bool**

### {{% prop-heading "performanceTelemetryEnabled" %}}

> **bool**

### {{% prop-heading "juiceTelemetryEnabled" %}}

> **bool**

### {{% prop-heading "performanceProfileStateEnabled" %}}

> **bool**

### {{% prop-heading "transactionTelemetryEnabled" %}}

> **bool**

### {{% prop-heading "compressTransactions" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ServerMetricsSettings](/vext/ref/fb/servermetricssettings) type.

