---
title: AimingConstraintEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[AimingConstraintEntityData](#constructor-0)**() |
| **[AimingConstraintEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AimingConstraintEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AimingConstraintEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AimingConstraintEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AimingConstraintEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "commonData" >}} | [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata) \| nil |
| {{< prop "enabledInProne" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AimingConstraintEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AimingConstraintEntityData {#constructor-0}

> **AimingConstraintEntityData**()

Creates a new [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata) frostbite instance.

### AimingConstraintEntityData {#constructor-1}

> **AimingConstraintEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AimingConstraintEntityData {#constructor-2}

> **AimingConstraintEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). |

### AimingConstraintEntityData {#constructor-3}

> **AimingConstraintEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). |

### AimingConstraintEntityData {#constructor-4}

> **AimingConstraintEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). |

### AimingConstraintEntityData {#constructor-5}

> **AimingConstraintEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata). |

## Properties

### {{% prop-heading "commonData" %}}

> **[AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata)** \| **nil**

### {{% prop-heading "enabledInProne" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata) type.

