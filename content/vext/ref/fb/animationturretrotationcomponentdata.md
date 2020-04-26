---
title: AnimationTurretRotationComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[AnimationTurretRotationComponentData](#constructor-0)**() |
| **[AnimationTurretRotationComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AnimationTurretRotationComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[AnimationTurretRotationComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimationTurretRotationComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimationTurretRotationComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rotations" >}} | [TurretRotationInfo](/vext/ref/fb/turretrotationinfo)[] |
| {{< prop "soldierBaseIndex" >}} | int |
| {{< prop "useVehicleWorldTransform" >}} | bool |
| {{< prop "outputWorldTransform" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimationTurretRotationComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimationTurretRotationComponentData {#constructor-0}

> **AnimationTurretRotationComponentData**()

Creates a new [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata) frostbite instance.

### AnimationTurretRotationComponentData {#constructor-1}

> **AnimationTurretRotationComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AnimationTurretRotationComponentData {#constructor-2}

> **AnimationTurretRotationComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). |

### AnimationTurretRotationComponentData {#constructor-3}

> **AnimationTurretRotationComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). |

### AnimationTurretRotationComponentData {#constructor-4}

> **AnimationTurretRotationComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). |

### AnimationTurretRotationComponentData {#constructor-5}

> **AnimationTurretRotationComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata). |

## Properties

### {{% prop-heading "rotations" %}}

> **[TurretRotationInfo](/vext/ref/fb/turretrotationinfo)**[]

### {{% prop-heading "soldierBaseIndex" %}}

> **int**

### {{% prop-heading "useVehicleWorldTransform" %}}

> **bool**

### {{% prop-heading "outputWorldTransform" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimationTurretRotationComponentData](/vext/ref/fb/animationturretrotationcomponentdata) type.

