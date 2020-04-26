---
title: AntiSpamConfig
---


## Summary
### Constructors
| |
| ----------- |
| **[AntiSpamConfig](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "detectionInterval" >}} | float |
| {{< prop "detectionIntervalMaxMessageCount" >}} | int |
| {{< prop "serverSideMessageCountTolerance" >}} | int |
| {{< prop "secondsBlocked" >}} | int |
| {{< prop "serverSideSecondsBlockedTolerance" >}} | int |
| {{< prop "notificationSid" >}} | string |
| {{< prop "stillBlockedSid" >}} | string |
| {{< prop "warningSound" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntiSpamConfig](/vext/ref/fb/antispamconfig) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntiSpamConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntiSpamConfig {#constructor-0}
> **AntiSpamConfig**()

Creates a new [AntiSpamConfig](/vext/ref/fb/antispamconfig) frostbite structure.

## Properties
### {{% prop-heading "detectionInterval" %}}
> **float**

### {{% prop-heading "detectionIntervalMaxMessageCount" %}}
> **int**

### {{% prop-heading "serverSideMessageCountTolerance" %}}
> **int**

### {{% prop-heading "secondsBlocked" %}}
> **int**

### {{% prop-heading "serverSideSecondsBlockedTolerance" %}}
> **int**

### {{% prop-heading "notificationSid" %}}
> **string**

### {{% prop-heading "stillBlockedSid" %}}
> **string**

### {{% prop-heading "warningSound" %}}
> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** | **nil**

## Methods
### Clone
> **Clone**(): [AntiSpamConfig](/vext/ref/fb/antispamconfig)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntiSpamConfig](/vext/ref/fb/antispamconfig)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntiSpamConfig](/vext/ref/fb/antispamconfig) type.

