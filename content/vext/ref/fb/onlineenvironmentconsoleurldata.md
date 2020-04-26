---
title: OnlineEnvironmentConsoleUrlData
---


## Summary
### Constructors
| |
| ----------- |
| **[OnlineEnvironmentConsoleUrlData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "url" >}} | [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlineEnvironmentConsoleUrlData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlineEnvironmentConsoleUrlData {#constructor-0}
> **OnlineEnvironmentConsoleUrlData**()

Creates a new [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) frostbite structure.

## Properties
### {{% prop-heading "platform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "url" %}}
> **[OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl)**

## Methods
### Clone
> **Clone**(): [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) type.

