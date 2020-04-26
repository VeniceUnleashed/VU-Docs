---
title: CameraData
---

Inherits from [GameObjectData](/vext/ref/fb/gameobjectdata)

## Summary

### Constructors

|  |
| --- |
| **[CameraData](#constructor-0)**() |
| **[CameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CameraData](#constructor-2)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CameraData](#constructor-3)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CameraData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "occlusionRayOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "shakeFactor" >}} | float |
| {{< prop "preFadeTime" >}} | float |
| {{< prop "fadeTime" >}} | float |
| {{< prop "fadeWaitTime" >}} | float |
| {{< prop "soundListenerRadius" >}} | float |
| {{< prop "viewFx" >}} | [ViewFxData](/vext/ref/fb/viewfxdata) \| nil |
| {{< prop "nearPlane" >}} | float |
| {{< prop "shadowViewDistanceScale" >}} | float |
| {{< prop "soundOcclusion" >}} | float |
| {{< prop "stayFadedWhileStreaming" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraData {#constructor-0}

> **CameraData**()

Creates a new [CameraData](/vext/ref/fb/cameradata) frostbite instance.

### CameraData {#constructor-1}

> **CameraData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraData](/vext/ref/fb/cameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CameraData {#constructor-2}

> **CameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CameraData](/vext/ref/fb/cameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CameraData](/vext/ref/fb/cameradata). |

### CameraData {#constructor-3}

> **CameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CameraData](/vext/ref/fb/cameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CameraData](/vext/ref/fb/cameradata). |

### CameraData {#constructor-4}

> **CameraData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CameraData](/vext/ref/fb/cameradata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CameraData](/vext/ref/fb/cameradata). |

## Properties

### {{% prop-heading "occlusionRayOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "shakeFactor" %}}

> **float**

### {{% prop-heading "preFadeTime" %}}

> **float**

### {{% prop-heading "fadeTime" %}}

> **float**

### {{% prop-heading "fadeWaitTime" %}}

> **float**

### {{% prop-heading "soundListenerRadius" %}}

> **float**

### {{% prop-heading "viewFx" %}}

> **[ViewFxData](/vext/ref/fb/viewfxdata)** \| **nil**

### {{% prop-heading "nearPlane" %}}

> **float**

### {{% prop-heading "shadowViewDistanceScale" %}}

> **float**

### {{% prop-heading "soundOcclusion" %}}

> **float**

### {{% prop-heading "stayFadedWhileStreaming" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraData](/vext/ref/fb/cameradata) type.

