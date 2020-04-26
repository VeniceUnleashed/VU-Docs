---
title: RigidBodyData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[RigidBodyData](#constructor-0)**() |
| **[RigidBodyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RigidBodyData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inertiaModifier" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "rigidBodyType" >}} | [RigidBodyType](/vext/ref/fb/rigidbodytype) |
| {{< prop "mass" >}} | float |
| {{< prop "restitution" >}} | float |
| {{< prop "friction" >}} | float |
| {{< prop "angularVelocityDamping" >}} | float |
| {{< prop "linearVelocityDamping" >}} | float |
| {{< prop "interactionToolkitCollisionVolumeId" >}} | int |
| {{< prop "motionType" >}} | [RigidBodyMotionType](/vext/ref/fb/rigidbodymotiontype) |
| {{< prop "qualityType" >}} | [RigidBodyQualityType](/vext/ref/fb/rigidbodyqualitytype) |
| {{< prop "collisionLayer" >}} | [RigidBodyCollisionLayer](/vext/ref/fb/rigidbodycollisionlayer) |
| {{< prop "floatPhysics" >}} | [FloatPhysicsData](/vext/ref/fb/floatphysicsdata) \| nil |
| {{< prop "constraints" >}} | [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RigidBodyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RigidBodyData {#constructor-0}
> **RigidBodyData**()

Creates a new [RigidBodyData](/vext/ref/fb/rigidbodydata) frostbite instance.

### RigidBodyData {#constructor-1}
> **RigidBodyData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RigidBodyData](/vext/ref/fb/rigidbodydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RigidBodyData {#constructor-2}
> **RigidBodyData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyData](/vext/ref/fb/rigidbodydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RigidBodyData](/vext/ref/fb/rigidbodydata). |

## Properties
### {{% prop-heading "inertiaModifier" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "rigidBodyType" %}}
> **[RigidBodyType](/vext/ref/fb/rigidbodytype)**

### {{% prop-heading "mass" %}}
> **float**

### {{% prop-heading "restitution" %}}
> **float**

### {{% prop-heading "friction" %}}
> **float**

### {{% prop-heading "angularVelocityDamping" %}}
> **float**

### {{% prop-heading "linearVelocityDamping" %}}
> **float**

### {{% prop-heading "interactionToolkitCollisionVolumeId" %}}
> **int**

### {{% prop-heading "motionType" %}}
> **[RigidBodyMotionType](/vext/ref/fb/rigidbodymotiontype)**

### {{% prop-heading "qualityType" %}}
> **[RigidBodyQualityType](/vext/ref/fb/rigidbodyqualitytype)**

### {{% prop-heading "collisionLayer" %}}
> **[RigidBodyCollisionLayer](/vext/ref/fb/rigidbodycollisionlayer)**

### {{% prop-heading "floatPhysics" %}}
> **[FloatPhysicsData](/vext/ref/fb/floatphysicsdata)** | **nil**

### {{% prop-heading "constraints" %}}
> **[RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RigidBodyData](/vext/ref/fb/rigidbodydata) type.

