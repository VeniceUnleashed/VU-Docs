---
title: CameraComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[CameraComponentData](#constructor-0)**() |
| **[CameraComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CameraComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CameraComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CameraComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CameraComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cameraTransitionPos" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "fieldOfView" >}} | float |
| {{< prop "forceFieldOfView" >}} | float |
| {{< prop "camera" >}} | [TargetCameraData](/vext/ref/fb/targetcameradata) \| nil |
| {{< prop "alternateView" >}} | [AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata) \| nil |
| {{< prop "regularView" >}} | [RegularCameraViewData](/vext/ref/fb/regularcameraviewdata) |
| {{< prop "freezeHeight" >}} | float |
| {{< prop "stanceData" >}} | [StanceCameraData](/vext/ref/fb/stancecameradata) |
| {{< prop "cameraSoundData" >}} | [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata) \| nil |
| {{< prop "soldierAnimatedCamera" >}} | [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) |
| {{< prop "cameraTransitionTime" >}} | float |
| {{< prop "meshParentComponentNumber" >}} | int |
| {{< prop "enableCameraMesh" >}} | bool |
| {{< prop "receiveImpulsesAsThirdPerson" >}} | bool |
| {{< prop "useCameraTransition" >}} | bool |
| {{< prop "alternateViewEnabled" >}} | bool |
| {{< prop "isFirstPerson" >}} | bool |
| {{< prop "ignoreOwnerOrientation" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraComponentData {#constructor-0}

> **CameraComponentData**()

Creates a new [CameraComponentData](/vext/ref/fb/cameracomponentdata) frostbite instance.

### CameraComponentData {#constructor-1}

> **CameraComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraComponentData](/vext/ref/fb/cameracomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CameraComponentData {#constructor-2}

> **CameraComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CameraComponentData](/vext/ref/fb/cameracomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CameraComponentData](/vext/ref/fb/cameracomponentdata). |

### CameraComponentData {#constructor-3}

> **CameraComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CameraComponentData](/vext/ref/fb/cameracomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CameraComponentData](/vext/ref/fb/cameracomponentdata). |

### CameraComponentData {#constructor-4}

> **CameraComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CameraComponentData](/vext/ref/fb/cameracomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CameraComponentData](/vext/ref/fb/cameracomponentdata). |

### CameraComponentData {#constructor-5}

> **CameraComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CameraComponentData](/vext/ref/fb/cameracomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CameraComponentData](/vext/ref/fb/cameracomponentdata). |

## Properties

### {{% prop-heading "cameraTransitionPos" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "fieldOfView" %}}

> **float**

### {{% prop-heading "forceFieldOfView" %}}

> **float**

### {{% prop-heading "camera" %}}

> **[TargetCameraData](/vext/ref/fb/targetcameradata)** \| **nil**

### {{% prop-heading "alternateView" %}}

> **[AlternateCameraViewData](/vext/ref/fb/alternatecameraviewdata)** \| **nil**

### {{% prop-heading "regularView" %}}

> **[RegularCameraViewData](/vext/ref/fb/regularcameraviewdata)**

### {{% prop-heading "freezeHeight" %}}

> **float**

### {{% prop-heading "stanceData" %}}

> **[StanceCameraData](/vext/ref/fb/stancecameradata)**

### {{% prop-heading "cameraSoundData" %}}

> **[CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata)** \| **nil**

### {{% prop-heading "soldierAnimatedCamera" %}}

> **[SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata)**

### {{% prop-heading "cameraTransitionTime" %}}

> **float**

### {{% prop-heading "meshParentComponentNumber" %}}

> **int**

### {{% prop-heading "enableCameraMesh" %}}

> **bool**

### {{% prop-heading "receiveImpulsesAsThirdPerson" %}}

> **bool**

### {{% prop-heading "useCameraTransition" %}}

> **bool**

### {{% prop-heading "alternateViewEnabled" %}}

> **bool**

### {{% prop-heading "isFirstPerson" %}}

> **bool**

### {{% prop-heading "ignoreOwnerOrientation" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraComponentData](/vext/ref/fb/cameracomponentdata) type.

