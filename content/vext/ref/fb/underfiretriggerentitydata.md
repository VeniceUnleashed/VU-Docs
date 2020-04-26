---
title: UnderFireTriggerEntityData
---

Inherits from [TriggerEntityData](/vext/ref/fb/triggerentitydata)

## Summary

### Constructors

|  |
| --- |
| **[UnderFireTriggerEntityData](#constructor-0)**() |
| **[UnderFireTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UnderFireTriggerEntityData](#constructor-2)**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata)) |
| **[UnderFireTriggerEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[UnderFireTriggerEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[UnderFireTriggerEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[UnderFireTriggerEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[UnderFireTriggerEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[UnderFireTriggerEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "radius" >}} | float |
| {{< prop "coolDownTime" >}} | float |
| {{< prop "triggerOnMaterialOnly" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "triggeredBy" >}} | [AreaTriggerInclude](/vext/ref/fb/areatriggerinclude) |
| {{< prop "disableIfTrackEntityIsLost" >}} | bool |
| {{< prop "randomYaw" >}} | bool |
| {{< prop "indicateHit" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UnderFireTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UnderFireTriggerEntityData {#constructor-0}

> **UnderFireTriggerEntityData**()

Creates a new [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata) frostbite instance.

### UnderFireTriggerEntityData {#constructor-1}

> **UnderFireTriggerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UnderFireTriggerEntityData {#constructor-2}

> **UnderFireTriggerEntityData**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata))

Casts an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEntityData](/vext/ref/fb/triggerentitydata) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

### UnderFireTriggerEntityData {#constructor-3}

> **UnderFireTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

### UnderFireTriggerEntityData {#constructor-4}

> **UnderFireTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

### UnderFireTriggerEntityData {#constructor-5}

> **UnderFireTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

### UnderFireTriggerEntityData {#constructor-6}

> **UnderFireTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

### UnderFireTriggerEntityData {#constructor-7}

> **UnderFireTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

### UnderFireTriggerEntityData {#constructor-8}

> **UnderFireTriggerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata). |

## Properties

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "coolDownTime" %}}

> **float**

### {{% prop-heading "triggerOnMaterialOnly" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "triggeredBy" %}}

> **[AreaTriggerInclude](/vext/ref/fb/areatriggerinclude)**

### {{% prop-heading "disableIfTrackEntityIsLost" %}}

> **bool**

### {{% prop-heading "randomYaw" %}}

> **bool**

### {{% prop-heading "indicateHit" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UnderFireTriggerEntityData](/vext/ref/fb/underfiretriggerentitydata) type.

