---
title: LookAtTriggerEntityData
---

Inherits from [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata)

## Summary

### Constructors

|  |
| --- |
| **[LookAtTriggerEntityData](#constructor-0)**() |
| **[LookAtTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LookAtTriggerEntityData](#constructor-2)**(other: [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata)) |
| **[LookAtTriggerEntityData](#constructor-3)**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata)) |
| **[LookAtTriggerEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[LookAtTriggerEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[LookAtTriggerEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[LookAtTriggerEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[LookAtTriggerEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[LookAtTriggerEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fov" >}} | float |
| {{< prop "weapon" >}} | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint) \| nil |
| {{< prop "zoomLevel" >}} | int |
| {{< prop "minDistanceToObject" >}} | float |
| {{< prop "maxDistanceToObject" >}} | float |
| {{< prop "startTriggerLookingAt" >}} | bool |
| {{< prop "checkOcclusion" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LookAtTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LookAtTriggerEntityData {#constructor-0}

> **LookAtTriggerEntityData**()

Creates a new [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata) frostbite instance.

### LookAtTriggerEntityData {#constructor-1}

> **LookAtTriggerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LookAtTriggerEntityData {#constructor-2}

> **LookAtTriggerEntityData**(other: [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata))

Casts an instance of type [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-3}

> **LookAtTriggerEntityData**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata))

Casts an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEntityData](/vext/ref/fb/triggerentitydata) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-4}

> **LookAtTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-5}

> **LookAtTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-6}

> **LookAtTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-7}

> **LookAtTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-8}

> **LookAtTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

### LookAtTriggerEntityData {#constructor-9}

> **LookAtTriggerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata). |

## Properties

### {{% prop-heading "fov" %}}

> **float**

### {{% prop-heading "weapon" %}}

> **[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint)** \| **nil**

### {{% prop-heading "zoomLevel" %}}

> **int**

### {{% prop-heading "minDistanceToObject" %}}

> **float**

### {{% prop-heading "maxDistanceToObject" %}}

> **float**

### {{% prop-heading "startTriggerLookingAt" %}}

> **bool**

### {{% prop-heading "checkOcclusion" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LookAtTriggerEntityData](/vext/ref/fb/lookattriggerentitydata) type.

