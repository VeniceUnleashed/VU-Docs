---
title: AeroDynamicPhysicsData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AeroDynamicPhysicsData](#constructor-0)**() |
| **[AeroDynamicPhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AeroDynamicPhysicsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "bodyDrag" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "bodyDragOffsetYZ" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "bodyDragOffsetXZ" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "bodyDragOffsetXY" >}} | [Vec3](/vext/ref/shared/class/vec3) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AeroDynamicPhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AeroDynamicPhysicsData {#constructor-0}
> **AeroDynamicPhysicsData**()

Creates a new [AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata) frostbite instance.

### AeroDynamicPhysicsData {#constructor-1}
> **AeroDynamicPhysicsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AeroDynamicPhysicsData {#constructor-2}
> **AeroDynamicPhysicsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata). |

## Properties
### {{% prop-heading "bodyDrag" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "bodyDragOffsetYZ" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "bodyDragOffsetXZ" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "bodyDragOffsetXY" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata) type.

