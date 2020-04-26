---
title: NetworkSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[NetworkSettings](#constructor-0)**() |
| **[NetworkSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[NetworkSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "protocolVersion" >}} | int |
| {{< prop "titleId" >}} | string |
| {{< prop "clientPort" >}} | int |
| {{< prop "serverPort" >}} | int |
| {{< prop "maxGhostCount" >}} | int |
| {{< prop "maxClientCount" >}} | int |
| {{< prop "maxClientFrameSize" >}} | int |
| {{< prop "maxServerFrameSize" >}} | int |
| {{< prop "xlspAddress" >}} | string |
| {{< prop "serverAddress" >}} | string |
| {{< prop "clientConnectionDebugFilePrefix" >}} | string |
| {{< prop "serverConnectionDebugFilePrefix" >}} | string |
| {{< prop "timeNudgeGhostFrequencyFactor" >}} | float |
| {{< prop "timeNudgeBias" >}} | float |
| {{< prop "connectTimeout" >}} | float |
| {{< prop "useFrameManager" >}} | bool |
| {{< prop "timeSyncEnabled" >}} | bool |
| {{< prop "incrementServerPortOnFail" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "NetworkSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### NetworkSettings {#constructor-0}

> **NetworkSettings**()

Creates a new [NetworkSettings](/vext/ref/fb/networksettings) frostbite instance.

### NetworkSettings {#constructor-1}

> **NetworkSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [NetworkSettings](/vext/ref/fb/networksettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### NetworkSettings {#constructor-2}

> **NetworkSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [NetworkSettings](/vext/ref/fb/networksettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [NetworkSettings](/vext/ref/fb/networksettings). |

## Properties

### {{% prop-heading "protocolVersion" %}}

> **int**

### {{% prop-heading "titleId" %}}

> **string**

### {{% prop-heading "clientPort" %}}

> **int**

### {{% prop-heading "serverPort" %}}

> **int**

### {{% prop-heading "maxGhostCount" %}}

> **int**

### {{% prop-heading "maxClientCount" %}}

> **int**

### {{% prop-heading "maxClientFrameSize" %}}

> **int**

### {{% prop-heading "maxServerFrameSize" %}}

> **int**

### {{% prop-heading "xlspAddress" %}}

> **string**

### {{% prop-heading "serverAddress" %}}

> **string**

### {{% prop-heading "clientConnectionDebugFilePrefix" %}}

> **string**

### {{% prop-heading "serverConnectionDebugFilePrefix" %}}

> **string**

### {{% prop-heading "timeNudgeGhostFrequencyFactor" %}}

> **float**

### {{% prop-heading "timeNudgeBias" %}}

> **float**

### {{% prop-heading "connectTimeout" %}}

> **float**

### {{% prop-heading "useFrameManager" %}}

> **bool**

### {{% prop-heading "timeSyncEnabled" %}}

> **bool**

### {{% prop-heading "incrementServerPortOnFail" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [NetworkSettings](/vext/ref/fb/networksettings) type.

