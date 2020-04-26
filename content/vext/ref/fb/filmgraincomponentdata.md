---
title: FilmGrainComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[FilmGrainComponentData](#constructor-0)**() |
| **[FilmGrainComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FilmGrainComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[FilmGrainComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FilmGrainComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FilmGrainComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "colorScale" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "textureScale" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "linearFilteringEnable" >}} | bool |
| {{< prop "randomEnable" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FilmGrainComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FilmGrainComponentData {#constructor-0}
> **FilmGrainComponentData**()

Creates a new [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata) frostbite instance.

### FilmGrainComponentData {#constructor-1}
> **FilmGrainComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FilmGrainComponentData {#constructor-2}
> **FilmGrainComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). |

### FilmGrainComponentData {#constructor-3}
> **FilmGrainComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). |

### FilmGrainComponentData {#constructor-4}
> **FilmGrainComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). |

### FilmGrainComponentData {#constructor-5}
> **FilmGrainComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata). |

## Properties
### {{% prop-heading "colorScale" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "textureScale" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "texture" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)** | **nil**

### {{% prop-heading "linearFilteringEnable" %}}
> **bool**

### {{% prop-heading "randomEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata) type.

