---
title: OnlineEnvironmentUrl
---


## Summary
### Constructors
| |
| ----------- |
| **[OnlineEnvironmentUrl](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "urls" >}} | [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlineEnvironmentUrl" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlineEnvironmentUrl {#constructor-0}
> **OnlineEnvironmentUrl**()

Creates a new [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) frostbite structure.

## Properties
### {{% prop-heading "urls" %}}
> **[OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)**[]

## Methods
### Clone
> **Clone**(): [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) type.

