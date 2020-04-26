---
title: PhysicsEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[PhysicsEntityData](#constructor-0)**() |
| **[PhysicsEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PhysicsEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PhysicsEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PhysicsEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PhysicsEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inertiaModifier" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "scaledAssets" >}} | [HavokAsset](/vext/ref/fb/havokasset)[] |
| {{< prop "rigidBodies" >}} | [RigidBodyData](/vext/ref/fb/rigidbodydata)[] |
| {{< prop "asset" >}} | [HavokAsset](/vext/ref/fb/havokasset) \| nil |
| {{< prop "floatPhysics" >}} | [FloatPhysicsData](/vext/ref/fb/floatphysicsdata) \| nil |
| {{< prop "mass" >}} | float |
| {{< prop "restitution" >}} | float |
| {{< prop "friction" >}} | float |
| {{< prop "linearVelocityDamping" >}} | float |
| {{< prop "angularVelocityDamping" >}} | float |
| {{< prop "proximity" >}} | [ProximityData](/vext/ref/fb/proximitydata) \| nil |
| {{< prop "constraints" >}} | [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)[] |
| {{< prop "encapsulatePartsInLists" >}} | bool |
| {{< prop "movableParts" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PhysicsEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PhysicsEntityData {#constructor-0}
> **PhysicsEntityData**()

Creates a new [PhysicsEntityData](/vext/ref/fb/physicsentitydata) frostbite instance.

### PhysicsEntityData {#constructor-1}
> **PhysicsEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PhysicsEntityData](/vext/ref/fb/physicsentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PhysicsEntityData {#constructor-2}
> **PhysicsEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). |

### PhysicsEntityData {#constructor-3}
> **PhysicsEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). |

### PhysicsEntityData {#constructor-4}
> **PhysicsEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). |

### PhysicsEntityData {#constructor-5}
> **PhysicsEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PhysicsEntityData](/vext/ref/fb/physicsentitydata). |

## Properties
### {{% prop-heading "inertiaModifier" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "scaledAssets" %}}
> **[HavokAsset](/vext/ref/fb/havokasset)**[]

### {{% prop-heading "rigidBodies" %}}
> **[RigidBodyData](/vext/ref/fb/rigidbodydata)**[]

### {{% prop-heading "asset" %}}
> **[HavokAsset](/vext/ref/fb/havokasset)** | **nil**

### {{% prop-heading "floatPhysics" %}}
> **[FloatPhysicsData](/vext/ref/fb/floatphysicsdata)** | **nil**

### {{% prop-heading "mass" %}}
> **float**

### {{% prop-heading "restitution" %}}
> **float**

### {{% prop-heading "friction" %}}
> **float**

### {{% prop-heading "linearVelocityDamping" %}}
> **float**

### {{% prop-heading "angularVelocityDamping" %}}
> **float**

### {{% prop-heading "proximity" %}}
> **[ProximityData](/vext/ref/fb/proximitydata)** | **nil**

### {{% prop-heading "constraints" %}}
> **[RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)**[]

### {{% prop-heading "encapsulatePartsInLists" %}}
> **bool**

### {{% prop-heading "movableParts" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PhysicsEntityData](/vext/ref/fb/physicsentitydata) type.

