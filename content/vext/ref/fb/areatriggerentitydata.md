---
title: AreaTriggerEntityData
---

Inherits from [TriggerEntityData](/vext/ref/fb/triggerentitydata)

## Summary

### Constructors

|  |
| --- |
| **[AreaTriggerEntityData](#constructor-0)**() |
| **[AreaTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AreaTriggerEntityData](#constructor-2)**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata)) |
| **[AreaTriggerEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[AreaTriggerEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[AreaTriggerEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AreaTriggerEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AreaTriggerEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AreaTriggerEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "geometryTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "include" >}} | [AreaTriggerInclude](/vext/ref/fb/areatriggerinclude) |
| {{< prop "insideAreaEventRepeatTime" >}} | float |
| {{< prop "radius" >}} | float |
| {{< prop "useCharacterEntity" >}} | bool |
| {{< prop "oneInsideAreaEventPerSoldier" >}} | bool |
| {{< prop "triggerOnlyOnLeave" >}} | bool |
| {{< prop "resetOnEnable" >}} | bool |
| {{< prop "triggerOnLeaveOnDeath" >}} | bool |
| {{< prop "triggerOnLeaveOnDisable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AreaTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AreaTriggerEntityData {#constructor-0}

> **AreaTriggerEntityData**()

Creates a new [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata) frostbite instance.

### AreaTriggerEntityData {#constructor-1}

> **AreaTriggerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AreaTriggerEntityData {#constructor-2}

> **AreaTriggerEntityData**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata))

Casts an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEntityData](/vext/ref/fb/triggerentitydata) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

### AreaTriggerEntityData {#constructor-3}

> **AreaTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

### AreaTriggerEntityData {#constructor-4}

> **AreaTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

### AreaTriggerEntityData {#constructor-5}

> **AreaTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

### AreaTriggerEntityData {#constructor-6}

> **AreaTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

### AreaTriggerEntityData {#constructor-7}

> **AreaTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

### AreaTriggerEntityData {#constructor-8}

> **AreaTriggerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata). |

## Properties

### {{% prop-heading "geometryTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "include" %}}

> **[AreaTriggerInclude](/vext/ref/fb/areatriggerinclude)**

### {{% prop-heading "insideAreaEventRepeatTime" %}}

> **float**

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "useCharacterEntity" %}}

> **bool**

### {{% prop-heading "oneInsideAreaEventPerSoldier" %}}

> **bool**

### {{% prop-heading "triggerOnlyOnLeave" %}}

> **bool**

### {{% prop-heading "resetOnEnable" %}}

> **bool**

### {{% prop-heading "triggerOnLeaveOnDeath" %}}

> **bool**

### {{% prop-heading "triggerOnLeaveOnDisable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata) type.

