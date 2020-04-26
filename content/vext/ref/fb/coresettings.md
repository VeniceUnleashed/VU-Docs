---
title: CoreSettings
---

## Summary

### Constructors

|  |
| --- |
| **[CoreSettings](#constructor-0)**() |
| **[CoreSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "randomTickSeed" >}} | int |
| {{< prop "availableLanguages" >}} | string |
| {{< prop "randomSessionId" >}} | int |
| {{< prop "randomTimeSeed" >}} | int |
| {{< prop "hardwareGpuBias" >}} | float |
| {{< prop "hardwareProfile" >}} | [HardwareProfile](/vext/ref/fb/hardwareprofile) |
| {{< prop "jobProcessorCount" >}} | int |
| {{< prop "maxJobThreadCount" >}} | int |
| {{< prop "host" >}} | string |
| {{< prop "hostUser" >}} | string |
| {{< prop "hostUserDomain" >}} | string |
| {{< prop "initSeed" >}} | string |
| {{< prop "logLevel" >}} | [CoreLogLevel](/vext/ref/fb/coreloglevel) |
| {{< prop "hardwareCpuBias" >}} | float |
| {{< prop "gameConfigurationName" >}} | string |
| {{< prop "profileDirectoryName" >}} | string |
| {{< prop "displayAsserts" >}} | bool |
| {{< prop "liveEditingEnable" >}} | bool |
| {{< prop "useStorageServer" >}} | bool |
| {{< prop "useDiskCaching" >}} | bool |
| {{< prop "crashOnFatalErrors" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CoreSettings](/vext/ref/fb/coresettings) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CoreSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CoreSettings {#constructor-0}

> **CoreSettings**()

Creates a new [CoreSettings](/vext/ref/fb/coresettings) frostbite instance.

### CoreSettings {#constructor-1}

> **CoreSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CoreSettings](/vext/ref/fb/coresettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "randomTickSeed" %}}

> **int**

### {{% prop-heading "availableLanguages" %}}

> **string**

### {{% prop-heading "randomSessionId" %}}

> **int**

### {{% prop-heading "randomTimeSeed" %}}

> **int**

### {{% prop-heading "hardwareGpuBias" %}}

> **float**

### {{% prop-heading "hardwareProfile" %}}

> **[HardwareProfile](/vext/ref/fb/hardwareprofile)**

### {{% prop-heading "jobProcessorCount" %}}

> **int**

### {{% prop-heading "maxJobThreadCount" %}}

> **int**

### {{% prop-heading "host" %}}

> **string**

### {{% prop-heading "hostUser" %}}

> **string**

### {{% prop-heading "hostUserDomain" %}}

> **string**

### {{% prop-heading "initSeed" %}}

> **string**

### {{% prop-heading "logLevel" %}}

> **[CoreLogLevel](/vext/ref/fb/coreloglevel)**

### {{% prop-heading "hardwareCpuBias" %}}

> **float**

### {{% prop-heading "gameConfigurationName" %}}

> **string**

### {{% prop-heading "profileDirectoryName" %}}

> **string**

### {{% prop-heading "displayAsserts" %}}

> **bool**

### {{% prop-heading "liveEditingEnable" %}}

> **bool**

### {{% prop-heading "useStorageServer" %}}

> **bool**

### {{% prop-heading "useDiskCaching" %}}

> **bool**

### {{% prop-heading "crashOnFatalErrors" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [CoreSettings](/vext/ref/fb/coresettings)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CoreSettings](/vext/ref/fb/coresettings)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CoreSettings](/vext/ref/fb/coresettings) type.

