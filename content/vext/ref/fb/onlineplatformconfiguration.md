---
title: OnlinePlatformConfiguration
---


## Summary
### Constructors
| |
| ----------- |
| **[OnlinePlatformConfiguration](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "services" >}} | [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset) \| nil |
| {{< prop "clientBackends" >}} | [PresenceBackendData](/vext/ref/fb/presencebackenddata)[] |
| {{< prop "serverBackends" >}} | [ServerBackendData](/vext/ref/fb/serverbackenddata)[] |
| {{< prop "isFallback" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlinePlatformConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlinePlatformConfiguration {#constructor-0}
> **OnlinePlatformConfiguration**()

Creates a new [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) frostbite structure.

## Properties
### {{% prop-heading "platform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "services" %}}
> **[OnlineServicesAsset](/vext/ref/fb/onlineservicesasset)** | **nil**

### {{% prop-heading "clientBackends" %}}
> **[PresenceBackendData](/vext/ref/fb/presencebackenddata)**[]

### {{% prop-heading "serverBackends" %}}
> **[ServerBackendData](/vext/ref/fb/serverbackenddata)**[]

### {{% prop-heading "isFallback" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) type.

