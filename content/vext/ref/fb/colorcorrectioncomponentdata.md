---
title: ColorCorrectionComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[ColorCorrectionComponentData](#constructor-0)**() |
| **[ColorCorrectionComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ColorCorrectionComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[ColorCorrectionComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ColorCorrectionComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ColorCorrectionComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "contrast" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "saturation" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "brightness" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "hue" >}} | float |
| {{< prop "colorGradingTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "colorGradingEnable" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ColorCorrectionComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ColorCorrectionComponentData {#constructor-0}
> **ColorCorrectionComponentData**()

Creates a new [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata) frostbite instance.

### ColorCorrectionComponentData {#constructor-1}
> **ColorCorrectionComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ColorCorrectionComponentData {#constructor-2}
> **ColorCorrectionComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). |

### ColorCorrectionComponentData {#constructor-3}
> **ColorCorrectionComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). |

### ColorCorrectionComponentData {#constructor-4}
> **ColorCorrectionComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). |

### ColorCorrectionComponentData {#constructor-5}
> **ColorCorrectionComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata). |

## Properties
### {{% prop-heading "contrast" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "saturation" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "brightness" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "hue" %}}
> **float**

### {{% prop-heading "colorGradingTexture" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)** | **nil**

### {{% prop-heading "colorGradingEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata) type.

