---
title: AnimatedCameraData
---

Inherits from 
[CameraData](/vext/ref/fb/cameradata)

## Summary
### Constructors
| |
| ----------- |
| **[AnimatedCameraData](#constructor-0)**() |
| **[AnimatedCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AnimatedCameraData](#constructor-2)**(other: [CameraData](/vext/ref/fb/cameradata)) |
| **[AnimatedCameraData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimatedCameraData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimatedCameraData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skeleton" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "cameraBone" >}} | string |
| {{< prop "fovBone" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimatedCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimatedCameraData {#constructor-0}
> **AnimatedCameraData**()

Creates a new [AnimatedCameraData](/vext/ref/fb/animatedcameradata) frostbite instance.

### AnimatedCameraData {#constructor-1}
> **AnimatedCameraData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AnimatedCameraData](/vext/ref/fb/animatedcameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AnimatedCameraData {#constructor-2}
> **AnimatedCameraData**(other: [CameraData](/vext/ref/fb/cameradata))

Casts an instance of type [CameraData](/vext/ref/fb/cameradata) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraData](/vext/ref/fb/cameradata) | The instance to cast to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). |

### AnimatedCameraData {#constructor-3}
> **AnimatedCameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). |

### AnimatedCameraData {#constructor-4}
> **AnimatedCameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). |

### AnimatedCameraData {#constructor-5}
> **AnimatedCameraData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AnimatedCameraData](/vext/ref/fb/animatedcameradata). |

## Properties
### {{% prop-heading "skeleton" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

### {{% prop-heading "cameraBone" %}}
> **string**

### {{% prop-heading "fovBone" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimatedCameraData](/vext/ref/fb/animatedcameradata) type.

