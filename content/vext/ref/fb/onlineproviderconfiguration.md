---
title: OnlineProviderConfiguration
---


## Summary
### Constructors
| |
| ----------- |
| **[OnlineProviderConfiguration](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "client" >}} | string |
| {{< prop "serviceName" >}} | string |
| {{< prop "sku" >}} | string |
| {{< prop "version" >}} | string |
| {{< prop "serverSocketPacketSize" >}} | int |
| {{< prop "isServer" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlineProviderConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlineProviderConfiguration {#constructor-0}
> **OnlineProviderConfiguration**()

Creates a new [OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration) frostbite structure.

## Properties
### {{% prop-heading "platform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "client" %}}
> **string**

### {{% prop-heading "serviceName" %}}
> **string**

### {{% prop-heading "sku" %}}
> **string**

### {{% prop-heading "version" %}}
> **string**

### {{% prop-heading "serverSocketPacketSize" %}}
> **int**

### {{% prop-heading "isServer" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration) type.

