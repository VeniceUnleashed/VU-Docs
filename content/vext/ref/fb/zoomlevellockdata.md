---
title: ZoomLevelLockData
---


## Summary
### Constructors
| |
| ----------- |
| **[ZoomLevelLockData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "outlineTaggedDistance" >}} | float |
| {{< prop "lockType" >}} | [LockType](/vext/ref/fb/locktype) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ZoomLevelLockData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ZoomLevelLockData {#constructor-0}
> **ZoomLevelLockData**()

Creates a new [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) frostbite structure.

## Properties
### {{% prop-heading "outlineTaggedDistance" %}}
> **float**

### {{% prop-heading "lockType" %}}
> **[LockType](/vext/ref/fb/locktype)**

## Methods
### Clone
> **Clone**(): [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) type.

