---
title: UavCameraData
---

Inherits from [TargetCameraData](/vext/ref/fb/targetcameradata)

## Summary

### Constructors

|  |
| --- |
| **[UavCameraData](#constructor-0)**() |
| **[UavCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UavCameraData](#constructor-2)**(other: [TargetCameraData](/vext/ref/fb/targetcameradata)) |
| **[UavCameraData](#constructor-3)**(other: [CameraData](/vext/ref/fb/cameradata)) |
| **[UavCameraData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[UavCameraData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[UavCameraData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "viewDistance" >}} | float |
| {{< prop "viewDistanceCurve" >}} | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)[] |
| {{< prop "viewAngle" >}} | float |
| {{< prop "viewAngleCurve" >}} | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)[] |
| {{< prop "rotationSpeed" >}} | float |
| {{< prop "rotationSpeedCurve" >}} | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)[] |
| {{< prop "zoomFov" >}} | float |
| {{< prop "zoomDelay" >}} | float |
| {{< prop "zoomTransitionTime" >}} | float |
| {{< prop "fov" >}} | float |
| {{< prop "focusPoint" >}} | [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) |
| {{< prop "centerPoint" >}} | [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) |
| {{< prop "upWeightDistance" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UavCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UavCameraData {#constructor-0}

> **UavCameraData**()

Creates a new [UavCameraData](/vext/ref/fb/uavcameradata) frostbite instance.

### UavCameraData {#constructor-1}

> **UavCameraData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UavCameraData](/vext/ref/fb/uavcameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UavCameraData {#constructor-2}

> **UavCameraData**(other: [TargetCameraData](/vext/ref/fb/targetcameradata))

Casts an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata) to [UavCameraData](/vext/ref/fb/uavcameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TargetCameraData](/vext/ref/fb/targetcameradata) | The instance to cast to [UavCameraData](/vext/ref/fb/uavcameradata). |

### UavCameraData {#constructor-3}

> **UavCameraData**(other: [CameraData](/vext/ref/fb/cameradata))

Casts an instance of type [CameraData](/vext/ref/fb/cameradata) to [UavCameraData](/vext/ref/fb/uavcameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraData](/vext/ref/fb/cameradata) | The instance to cast to [UavCameraData](/vext/ref/fb/uavcameradata). |

### UavCameraData {#constructor-4}

> **UavCameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [UavCameraData](/vext/ref/fb/uavcameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [UavCameraData](/vext/ref/fb/uavcameradata). |

### UavCameraData {#constructor-5}

> **UavCameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [UavCameraData](/vext/ref/fb/uavcameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [UavCameraData](/vext/ref/fb/uavcameradata). |

### UavCameraData {#constructor-6}

> **UavCameraData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UavCameraData](/vext/ref/fb/uavcameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UavCameraData](/vext/ref/fb/uavcameradata). |

## Properties

### {{% prop-heading "viewDistance" %}}

> **float**

### {{% prop-heading "viewDistanceCurve" %}}

> **[CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)**[]

### {{% prop-heading "viewAngle" %}}

> **float**

### {{% prop-heading "viewAngleCurve" %}}

> **[CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)**[]

### {{% prop-heading "rotationSpeed" %}}

> **float**

### {{% prop-heading "rotationSpeedCurve" %}}

> **[CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)**[]

### {{% prop-heading "zoomFov" %}}

> **float**

### {{% prop-heading "zoomDelay" %}}

> **float**

### {{% prop-heading "zoomTransitionTime" %}}

> **float**

### {{% prop-heading "fov" %}}

> **float**

### {{% prop-heading "focusPoint" %}}

> **[UavCameraPointData](/vext/ref/fb/uavcamerapointdata)**

### {{% prop-heading "centerPoint" %}}

> **[UavCameraPointData](/vext/ref/fb/uavcamerapointdata)**

### {{% prop-heading "upWeightDistance" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UavCameraData](/vext/ref/fb/uavcameradata) type.

