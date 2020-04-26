---
title: PackagingRule
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[PackagingRule](#constructor-0)**() |
| **[PackagingRule](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PackagingRule](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PackagingRule](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "debugColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "canTargetSelf" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PackagingRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PackagingRule {#constructor-0}
> **PackagingRule**()

Creates a new [PackagingRule](/vext/ref/fb/packagingrule) frostbite instance.

### PackagingRule {#constructor-1}
> **PackagingRule**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PackagingRule](/vext/ref/fb/packagingrule) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PackagingRule {#constructor-2}
> **PackagingRule**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PackagingRule](/vext/ref/fb/packagingrule). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PackagingRule](/vext/ref/fb/packagingrule). |

### PackagingRule {#constructor-3}
> **PackagingRule**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PackagingRule](/vext/ref/fb/packagingrule). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PackagingRule](/vext/ref/fb/packagingrule). |

## Properties
### {{% prop-heading "debugColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "canTargetSelf" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PackagingRule](/vext/ref/fb/packagingrule) type.

