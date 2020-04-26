---
title: CoreSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[CoreSettings](#constructor-0)**() |

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
| ------ | ---- |
| **[Clone](#clone)**() | [CoreSettings](/vext/ref/fb/coresettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CoreSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CoreSettings {#constructor-0}
> **CoreSettings**()

Creates a new [CoreSettings](/vext/ref/fb/coresettings) frostbite structure.

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
### Clone
> **Clone**(): [CoreSettings](/vext/ref/fb/coresettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CoreSettings](/vext/ref/fb/coresettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CoreSettings](/vext/ref/fb/coresettings) type.

