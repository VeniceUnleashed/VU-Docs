---
title: CapturePointEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[CapturePointEntityData](#constructor-0)**() |
| **[CapturePointEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CapturePointEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[CapturePointEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[CapturePointEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CapturePointEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CapturePointEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CapturePointEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "enemyTicketLossWhenCaptured" >}} | int |
| {{< prop "minNrToTakeControl" >}} | int |
| {{< prop "flagTemplates" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint)[] |
| {{< prop "capturePoint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "initialOwnerTeam" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "captureRadius" >}} | float |
| {{< prop "maxCaptureMultiplier" >}} | int |
| {{< prop "areaValue" >}} | int |
| {{< prop "spawnMenuListOrdinal" >}} | int |
| {{< prop "areaValues" >}} | [AreaValueTeam](/vext/ref/fb/areavalueteam)[] |
| {{< prop "timeToGetControl" >}} | int |
| {{< prop "timeToLoseControl" >}} | int |
| {{< prop "returnMultiplier" >}} | float |
| {{< prop "onlyTakeableByTeam" >}} | int |
| {{< prop "showRadius" >}} | float |
| {{< prop "hideRadius" >}} | float |
| {{< prop "addedMultiplierPerPlayer" >}} | float |
| {{< prop "modify3DIconVerticalOffset" >}} | float |
| {{< prop "capturableType" >}} | [CapturableType](/vext/ref/fb/capturabletype) |
| {{< prop "intruderWarningSID" >}} | string |
| {{< prop "isCapturedInUpperSphere" >}} | bool |
| {{< prop "disableWhenLosingControl" >}} | bool |
| {{< prop "loseControlWhenNotClose" >}} | bool |
| {{< prop "disableIfEnemyInside" >}} | bool |
| {{< prop "isVisible" >}} | bool |
| {{< prop "forceSnap" >}} | bool |
| {{< prop "useAreaValuesPerTeam" >}} | bool |
| {{< prop "intruderWarning" >}} | bool |
| {{< prop "showOnMinimap" >}} | bool |
| {{< prop "hoistFlag" >}} | bool |
| {{< prop "startAtBottom" >}} | bool |
| {{< prop "removeWhenCaptured" >}} | bool |
| {{< prop "seesawCapturing" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CapturePointEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CapturePointEntityData {#constructor-0}

> **CapturePointEntityData**()

Creates a new [CapturePointEntityData](/vext/ref/fb/capturepointentitydata) frostbite instance.

### CapturePointEntityData {#constructor-1}

> **CapturePointEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CapturePointEntityData](/vext/ref/fb/capturepointentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CapturePointEntityData {#constructor-2}

> **CapturePointEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). |

### CapturePointEntityData {#constructor-3}

> **CapturePointEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). |

### CapturePointEntityData {#constructor-4}

> **CapturePointEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). |

### CapturePointEntityData {#constructor-5}

> **CapturePointEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). |

### CapturePointEntityData {#constructor-6}

> **CapturePointEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). |

### CapturePointEntityData {#constructor-7}

> **CapturePointEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CapturePointEntityData](/vext/ref/fb/capturepointentitydata). |

## Properties

### {{% prop-heading "enemyTicketLossWhenCaptured" %}}

> **int**

### {{% prop-heading "minNrToTakeControl" %}}

> **int**

### {{% prop-heading "flagTemplates" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)**[]

### {{% prop-heading "capturePoint" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "initialOwnerTeam" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "captureRadius" %}}

> **float**

### {{% prop-heading "maxCaptureMultiplier" %}}

> **int**

### {{% prop-heading "areaValue" %}}

> **int**

### {{% prop-heading "spawnMenuListOrdinal" %}}

> **int**

### {{% prop-heading "areaValues" %}}

> **[AreaValueTeam](/vext/ref/fb/areavalueteam)**[]

### {{% prop-heading "timeToGetControl" %}}

> **int**

### {{% prop-heading "timeToLoseControl" %}}

> **int**

### {{% prop-heading "returnMultiplier" %}}

> **float**

### {{% prop-heading "onlyTakeableByTeam" %}}

> **int**

### {{% prop-heading "showRadius" %}}

> **float**

### {{% prop-heading "hideRadius" %}}

> **float**

### {{% prop-heading "addedMultiplierPerPlayer" %}}

> **float**

### {{% prop-heading "modify3DIconVerticalOffset" %}}

> **float**

### {{% prop-heading "capturableType" %}}

> **[CapturableType](/vext/ref/fb/capturabletype)**

### {{% prop-heading "intruderWarningSID" %}}

> **string**

### {{% prop-heading "isCapturedInUpperSphere" %}}

> **bool**

### {{% prop-heading "disableWhenLosingControl" %}}

> **bool**

### {{% prop-heading "loseControlWhenNotClose" %}}

> **bool**

### {{% prop-heading "disableIfEnemyInside" %}}

> **bool**

### {{% prop-heading "isVisible" %}}

> **bool**

### {{% prop-heading "forceSnap" %}}

> **bool**

### {{% prop-heading "useAreaValuesPerTeam" %}}

> **bool**

### {{% prop-heading "intruderWarning" %}}

> **bool**

### {{% prop-heading "showOnMinimap" %}}

> **bool**

### {{% prop-heading "hoistFlag" %}}

> **bool**

### {{% prop-heading "startAtBottom" %}}

> **bool**

### {{% prop-heading "removeWhenCaptured" %}}

> **bool**

### {{% prop-heading "seesawCapturing" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CapturePointEntityData](/vext/ref/fb/capturepointentitydata) type.

