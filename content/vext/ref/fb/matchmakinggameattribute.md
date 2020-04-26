---
title: MatchmakingGameAttribute
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingGameAttribute](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "attribute" >}} | string |
| {{< prop "value" >}} | string |
| {{< prop "override" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingGameAttribute" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingGameAttribute {#constructor-0}
> **MatchmakingGameAttribute**()

Creates a new [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) frostbite structure.

## Properties
### {{% prop-heading "attribute" %}}
> **string**

### {{% prop-heading "value" %}}
> **string**

### {{% prop-heading "override" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) type.

