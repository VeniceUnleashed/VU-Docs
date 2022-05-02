---
title: PhysicsEntityBase
---

Inherits from [SpatialEntity](/vext/ref/shared/type/spatialentity)

## Summary

### Constructors

|  |
| --- |
| **[PhysicsEntityBase](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |
| **[PhysicsEntityBase](#constructor-1)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[PhysicsEntityBase](#constructor-2)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mass" true >}} | float |
| {{< prop "invMass" true >}} | float |
| {{< prop "linearVelocity" >}} | [Vec3](/vext/ref/shared/type/vec3) \| nil |
| {{< prop "angularVelocity" >}} | [Vec3](/vext/ref/shared/type/vec3) \| nil |
| {{< prop "position" true >}} | [Vec3](/vext/ref/shared/type/vec3) \| nil |
| {{< prop "sleeping" >}} | bool |
| {{< prop "addedToWorld" true >}} | bool |
| {{< prop "partCount" true >}} | int |
| {{< prop "gravityFactor" >}} | float |
| {{< prop "friction" >}} | float |
| {{< prop "restitution" >}} | float |
| {{< prop "linearDamping" >}} | float |
| {{< prop "angularDamping" >}} | float |
| {{< prop "userData" >}} | [Entity](/vext/ref/shared/type/entity) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[AddToWorld](#addtoworld)**() | void |
| **[RemoveFromWorld](#removefromworld)**() | void |
| **[GetPart](#getpart)**(partId: int) | [Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component) \| nil |
| **[GetPartTransform](#getparttransform)**(partId: int) | [QuatTransform](/vext/ref/shared/type/quattransform) \| nil |
| **[GetPartMaterial](#getpartmaterial)**(partId: int) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[GetPartMaterial](#getpartmaterial-1)**(partId: int, atPos: [Vec3](/vext/ref/shared/type/vec3)) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[GetPartMaterialFlags](#getpartmaterialflags)**(partId: int) | int |
| **[GetProperty](#getproperty)**(propertyId: int) | int |
| **[SetProperty](#setproperty)**(propertyId: int, value: int) | void |
| **[RemoveProperty](#removeproperty)**(propertyId: int) | int |
| **[SetMass](#setmass)**(mass: float, updateInertia: bool) | void |
| **[ApplyForce](#applyforce)**(deltaTime: float, force: [Vec3](/vext/ref/shared/type/vec3)) | void |
| **[ApplyForce](#applyforce-1)**(deltaTime: float, force: [Vec3](/vext/ref/shared/type/vec3), position: [Vec3](/vext/ref/shared/type/vec3)) | void |
| **[ApplyTorque](#applytorque)**(deltaTime: float, torque: [Vec3](/vext/ref/shared/type/vec3)) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhysicsEntityBase" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhysicsEntityBase {#constructor-0}

> **PhysicsEntityBase**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

### PhysicsEntityBase {#constructor-1}

> **PhysicsEntityBase**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### PhysicsEntityBase {#constructor-2}

> **PhysicsEntityBase**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

## Properties

### {{% prop-heading "mass" true %}}

> **float**

### {{% prop-heading "invMass" true %}}

> **float**

### {{% prop-heading "linearVelocity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)** \| **nil**

### {{% prop-heading "angularVelocity" %}}

> **[Vec3](/vext/ref/shared/type/vec3)** \| **nil**

### {{% prop-heading "position" true %}}

> **[Vec3](/vext/ref/shared/type/vec3)** \| **nil**

### {{% prop-heading "sleeping" %}}

> **bool**

### {{% prop-heading "addedToWorld" true %}}

> **bool**

### {{% prop-heading "partCount" true %}}

> **int**

### {{% prop-heading "gravityFactor" %}}

> **float**

### {{% prop-heading "friction" %}}

> **float**

### {{% prop-heading "restitution" %}}

> **float**

### {{% prop-heading "linearDamping" %}}

> **float**

### {{% prop-heading "angularDamping" %}}

> **float**

### {{% prop-heading "userData" %}}

> **[Entity](/vext/ref/shared/type/entity)** \| **nil**

## Methods

### AddToWorld {#addtoworld}

> **AddToWorld**()

### RemoveFromWorld {#removefromworld}

> **RemoveFromWorld**()

### GetPart {#getpart}

> **GetPart**(partId: int): [Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)** \| **[Component](/vext/ref/shared/type/component)** \| **nil** |  |

### GetPartTransform {#getparttransform}

> **GetPartTransform**(partId: int): [QuatTransform](/vext/ref/shared/type/quattransform) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[QuatTransform](/vext/ref/shared/type/quattransform)** \| **nil** |  |

### GetPartMaterial {#getpartmaterial}

> **GetPartMaterial**(partId: int): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### GetPartMaterial {#getpartmaterial-1}

> **GetPartMaterial**(partId: int, atPos: [Vec3](/vext/ref/shared/type/vec3)): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partId** | int |  |
| **atPos** | [Vec3](/vext/ref/shared/type/vec3) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### GetPartMaterialFlags {#getpartmaterialflags}

> **GetPartMaterialFlags**(partId: int): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetProperty {#getproperty}

> **GetProperty**(propertyId: int): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### SetProperty {#setproperty}

> **SetProperty**(propertyId: int, value: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |
| **value** | int |  |

### RemoveProperty {#removeproperty}

> **RemoveProperty**(propertyId: int): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### SetMass {#setmass}

> **SetMass**(mass: float, updateInertia: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **mass** | float |  |
| **updateInertia** | bool |  |

### ApplyForce {#applyforce}

> **ApplyForce**(deltaTime: float, force: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **deltaTime** | float |  |
| **force** | [Vec3](/vext/ref/shared/type/vec3) |  |

### ApplyForce {#applyforce-1}

> **ApplyForce**(deltaTime: float, force: [Vec3](/vext/ref/shared/type/vec3), position: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **deltaTime** | float |  |
| **force** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **position** | [Vec3](/vext/ref/shared/type/vec3) |  |

### ApplyTorque {#applytorque}

> **ApplyTorque**(deltaTime: float, torque: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **deltaTime** | float |  |
| **torque** | [Vec3](/vext/ref/shared/type/vec3) |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

