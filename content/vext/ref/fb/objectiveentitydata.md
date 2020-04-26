---
title: ObjectiveEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[ObjectiveEntityData](#constructor-0)**() |
| **[ObjectiveEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ObjectiveEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ObjectiveEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ObjectiveEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ObjectiveEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ObjectiveEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ObjectiveEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "objectiveBriefSid" >}} | string |
| {{< prop "objectiveSid" >}} | string |
| {{< prop "hudData" >}} | [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata) \| nil |
| {{< prop "objectiveType" >}} | [ObjectiveType](/vext/ref/fb/objectivetype) |
| {{< prop "displayTime" >}} | float |
| {{< prop "delayTime" >}} | float |
| {{< prop "squadId" >}} | [SquadId](/vext/ref/fb/squadid) |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "successSid" >}} | string |
| {{< prop "reciever" >}} | [MessageReciever](/vext/ref/fb/messagereciever) |
| {{< prop "retriggerSuccessOnShowObjective" >}} | bool |
| {{< prop "tutorial" >}} | bool |
| {{< prop "displaySuccess" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ObjectiveEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ObjectiveEntityData {#constructor-0}

> **ObjectiveEntityData**()

Creates a new [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata) frostbite instance.

### ObjectiveEntityData {#constructor-1}

> **ObjectiveEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ObjectiveEntityData {#constructor-2}

> **ObjectiveEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). |

### ObjectiveEntityData {#constructor-3}

> **ObjectiveEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). |

### ObjectiveEntityData {#constructor-4}

> **ObjectiveEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). |

### ObjectiveEntityData {#constructor-5}

> **ObjectiveEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). |

### ObjectiveEntityData {#constructor-6}

> **ObjectiveEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). |

### ObjectiveEntityData {#constructor-7}

> **ObjectiveEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata). |

## Properties

### {{% prop-heading "objectiveBriefSid" %}}

> **string**

### {{% prop-heading "objectiveSid" %}}

> **string**

### {{% prop-heading "hudData" %}}

> **[MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata)** \| **nil**

### {{% prop-heading "objectiveType" %}}

> **[ObjectiveType](/vext/ref/fb/objectivetype)**

### {{% prop-heading "displayTime" %}}

> **float**

### {{% prop-heading "delayTime" %}}

> **float**

### {{% prop-heading "squadId" %}}

> **[SquadId](/vext/ref/fb/squadid)**

### {{% prop-heading "teamId" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "successSid" %}}

> **string**

### {{% prop-heading "reciever" %}}

> **[MessageReciever](/vext/ref/fb/messagereciever)**

### {{% prop-heading "retriggerSuccessOnShowObjective" %}}

> **bool**

### {{% prop-heading "tutorial" %}}

> **bool**

### {{% prop-heading "displaySuccess" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ObjectiveEntityData](/vext/ref/fb/objectiveentitydata) type.

