---
title: EnlightenComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[EnlightenComponentData](#constructor-0)**() |
| **[EnlightenComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EnlightenComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[EnlightenComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EnlightenComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EnlightenComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skyBoxSkyColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "skyBoxBackLightColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "skyBoxGroundColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "terrainColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "skyBoxSunLightColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "bounceScale" >}} | float |
| {{< prop "cullDistance" >}} | float |
| {{< prop "sunScale" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "skyBoxBackLightRotationY" >}} | float |
| {{< prop "skyBoxSunLightColorSize" >}} | float |
| {{< prop "skyBoxBackLightColorSize" >}} | float |
| {{< prop "skyBoxBackLightRotationX" >}} | float |
| {{< prop "skyBoxEnable" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnlightenComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnlightenComponentData {#constructor-0}
> **EnlightenComponentData**()

Creates a new [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata) frostbite instance.

### EnlightenComponentData {#constructor-1}
> **EnlightenComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EnlightenComponentData {#constructor-2}
> **EnlightenComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). |

### EnlightenComponentData {#constructor-3}
> **EnlightenComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). |

### EnlightenComponentData {#constructor-4}
> **EnlightenComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). |

### EnlightenComponentData {#constructor-5}
> **EnlightenComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata). |

## Properties
### {{% prop-heading "skyBoxSkyColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "skyBoxBackLightColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "skyBoxGroundColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "terrainColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "skyBoxSunLightColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "bounceScale" %}}
> **float**

### {{% prop-heading "cullDistance" %}}
> **float**

### {{% prop-heading "sunScale" %}}
> **float**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "skyBoxBackLightRotationY" %}}
> **float**

### {{% prop-heading "skyBoxSunLightColorSize" %}}
> **float**

### {{% prop-heading "skyBoxBackLightColorSize" %}}
> **float**

### {{% prop-heading "skyBoxBackLightRotationX" %}}
> **float**

### {{% prop-heading "skyBoxEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata) type.

