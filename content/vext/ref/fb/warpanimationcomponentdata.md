---
title: WarpAnimationComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[WarpAnimationComponentData](#constructor-0)**() |
| **[WarpAnimationComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WarpAnimationComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[WarpAnimationComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WarpAnimationComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WarpAnimationComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "connectTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "cannedAnimBinding" >}} | [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) |
| {{< prop "animationEntitySpacePriority" >}} | int |
| {{< prop "warpBinding" >}} | [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding) |
| {{< prop "boneToAlign" >}} | [GameplayBones](/vext/ref/fb/gameplaybones) |
| {{< prop "requireAnimationWeight" >}} | bool |
| {{< prop "forceAnimationTransform" >}} | bool |
| {{< prop "externalConnectTransform" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WarpAnimationComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WarpAnimationComponentData {#constructor-0}
> **WarpAnimationComponentData**()

Creates a new [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata) frostbite instance.

### WarpAnimationComponentData {#constructor-1}
> **WarpAnimationComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WarpAnimationComponentData {#constructor-2}
> **WarpAnimationComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). |

### WarpAnimationComponentData {#constructor-3}
> **WarpAnimationComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). |

### WarpAnimationComponentData {#constructor-4}
> **WarpAnimationComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). |

### WarpAnimationComponentData {#constructor-5}
> **WarpAnimationComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata). |

## Properties
### {{% prop-heading "connectTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "cannedAnimBinding" %}}
> **[CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding)**

### {{% prop-heading "animationEntitySpacePriority" %}}
> **int**

### {{% prop-heading "warpBinding" %}}
> **[WarpAnimationBinding](/vext/ref/fb/warpanimationbinding)**

### {{% prop-heading "boneToAlign" %}}
> **[GameplayBones](/vext/ref/fb/gameplaybones)**

### {{% prop-heading "requireAnimationWeight" %}}
> **bool**

### {{% prop-heading "forceAnimationTransform" %}}
> **bool**

### {{% prop-heading "externalConnectTransform" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WarpAnimationComponentData](/vext/ref/fb/warpanimationcomponentdata) type.

