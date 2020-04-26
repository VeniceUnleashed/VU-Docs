---
title: PrecomputeCache
---


## Summary
### Constructors
| |
| ----------- |
| **[PrecomputeCache](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "guid" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "key" >}} | string |
| {{< prop "cachedDataEnable" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PrecomputeCache](/vext/ref/fb/precomputecache) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PrecomputeCache" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PrecomputeCache {#constructor-0}
> **PrecomputeCache**()

Creates a new [PrecomputeCache](/vext/ref/fb/precomputecache) frostbite structure.

## Properties
### {{% prop-heading "guid" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "key" %}}
> **string**

### {{% prop-heading "cachedDataEnable" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [PrecomputeCache](/vext/ref/fb/precomputecache)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PrecomputeCache](/vext/ref/fb/precomputecache)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PrecomputeCache](/vext/ref/fb/precomputecache) type.

