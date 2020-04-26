---
title: MapMarkerEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[MapMarkerEntityData](#constructor-0)**() |
| **[MapMarkerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MapMarkerEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[MapMarkerEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[MapMarkerEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MapMarkerEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MapMarkerEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MapMarkerEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "baseTransform" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "progressMinTime" >}} | float |
| {{< prop "sid" >}} | string |
| {{< prop "nrOfPassengers" >}} | int |
| {{< prop "nrOfEntries" >}} | int |
| {{< prop "progressTime1Player" >}} | float |
| {{< prop "showRadius" >}} | float |
| {{< prop "hideRadius" >}} | float |
| {{< prop "blinkTime" >}} | float |
| {{< prop "markerType" >}} | [MapMarkerType](/vext/ref/fb/mapmarkertype) |
| {{< prop "visibleForTeam" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "ownerTeam" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "hudIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "verticalOffset" >}} | float |
| {{< prop "focusPointRadius" >}} | float |
| {{< prop "instantFlagReturnRadius" >}} | float |
| {{< prop "progress" >}} | float |
| {{< prop "progressPlayerSpeedUpPercentage" >}} | float |
| {{< prop "trackedPlayersInRange" >}} | int |
| {{< prop "trackingPlayerRange" >}} | float |
| {{< prop "progressTime" >}} | float |
| {{< prop "onlyShowSnapped" >}} | bool |
| {{< prop "flagControlMarker" >}} | bool |
| {{< prop "showProgress" >}} | bool |
| {{< prop "useMarkerTransform" >}} | bool |
| {{< prop "isVisible" >}} | bool |
| {{< prop "snap" >}} | bool |
| {{< prop "showAirTargetBox" >}} | bool |
| {{< prop "isFocusPoint" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MapMarkerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MapMarkerEntityData {#constructor-0}

> **MapMarkerEntityData**()

Creates a new [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata) frostbite instance.

### MapMarkerEntityData {#constructor-1}

> **MapMarkerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MapMarkerEntityData {#constructor-2}

> **MapMarkerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). |

### MapMarkerEntityData {#constructor-3}

> **MapMarkerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). |

### MapMarkerEntityData {#constructor-4}

> **MapMarkerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). |

### MapMarkerEntityData {#constructor-5}

> **MapMarkerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). |

### MapMarkerEntityData {#constructor-6}

> **MapMarkerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). |

### MapMarkerEntityData {#constructor-7}

> **MapMarkerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata). |

## Properties

### {{% prop-heading "baseTransform" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "progressMinTime" %}}

> **float**

### {{% prop-heading "sid" %}}

> **string**

### {{% prop-heading "nrOfPassengers" %}}

> **int**

### {{% prop-heading "nrOfEntries" %}}

> **int**

### {{% prop-heading "progressTime1Player" %}}

> **float**

### {{% prop-heading "showRadius" %}}

> **float**

### {{% prop-heading "hideRadius" %}}

> **float**

### {{% prop-heading "blinkTime" %}}

> **float**

### {{% prop-heading "markerType" %}}

> **[MapMarkerType](/vext/ref/fb/mapmarkertype)**

### {{% prop-heading "visibleForTeam" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "ownerTeam" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "hudIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "verticalOffset" %}}

> **float**

### {{% prop-heading "focusPointRadius" %}}

> **float**

### {{% prop-heading "instantFlagReturnRadius" %}}

> **float**

### {{% prop-heading "progress" %}}

> **float**

### {{% prop-heading "progressPlayerSpeedUpPercentage" %}}

> **float**

### {{% prop-heading "trackedPlayersInRange" %}}

> **int**

### {{% prop-heading "trackingPlayerRange" %}}

> **float**

### {{% prop-heading "progressTime" %}}

> **float**

### {{% prop-heading "onlyShowSnapped" %}}

> **bool**

### {{% prop-heading "flagControlMarker" %}}

> **bool**

### {{% prop-heading "showProgress" %}}

> **bool**

### {{% prop-heading "useMarkerTransform" %}}

> **bool**

### {{% prop-heading "isVisible" %}}

> **bool**

### {{% prop-heading "snap" %}}

> **bool**

### {{% prop-heading "showAirTargetBox" %}}

> **bool**

### {{% prop-heading "isFocusPoint" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata) type.

