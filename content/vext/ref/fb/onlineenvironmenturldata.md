---
title: OnlineEnvironmentUrlData
---


## Summary
### Constructors
| |
| ----------- |
| **[OnlineEnvironmentUrlData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "url" >}} | string |
| {{< prop "environment" >}} | [OnlineEnvironment](/vext/ref/fb/onlineenvironment) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlineEnvironmentUrlData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlineEnvironmentUrlData {#constructor-0}
> **OnlineEnvironmentUrlData**()

Creates a new [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) frostbite structure.

## Properties
### {{% prop-heading "url" %}}
> **string**

### {{% prop-heading "environment" %}}
> **[OnlineEnvironment](/vext/ref/fb/onlineenvironment)**

## Methods
### Clone
> **Clone**(): [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) type.

