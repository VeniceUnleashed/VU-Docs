---
title: CharacterLightingComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterLightingComponentData](#constructor-0)**() |
| **[CharacterLightingComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterLightingComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CharacterLightingComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterLightingComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterLightingComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "bottomLight" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "topLight" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "characterLightingMode" >}} | [CharacterLightingMode](/vext/ref/fb/characterlightingmode) |
| {{< prop "cameraUpRotation" >}} | float |
| {{< prop "topLightDirY" >}} | float |
| {{< prop "blendFactor" >}} | float |
| {{< prop "topLightDirX" >}} | float |
| {{< prop "lockToCameraDirection" >}} | bool |
| {{< prop "firstPersonEnable" >}} | bool |
| {{< prop "characterLightEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterLightingComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterLightingComponentData {#constructor-0}
> **CharacterLightingComponentData**()

Creates a new [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata) frostbite instance.

### CharacterLightingComponentData {#constructor-1}
> **CharacterLightingComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterLightingComponentData {#constructor-2}
> **CharacterLightingComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). |

### CharacterLightingComponentData {#constructor-3}
> **CharacterLightingComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). |

### CharacterLightingComponentData {#constructor-4}
> **CharacterLightingComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). |

### CharacterLightingComponentData {#constructor-5}
> **CharacterLightingComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata). |

## Properties
### {{% prop-heading "bottomLight" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "topLight" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "characterLightingMode" %}}
> **[CharacterLightingMode](/vext/ref/fb/characterlightingmode)**

### {{% prop-heading "cameraUpRotation" %}}
> **float**

### {{% prop-heading "topLightDirY" %}}
> **float**

### {{% prop-heading "blendFactor" %}}
> **float**

### {{% prop-heading "topLightDirX" %}}
> **float**

### {{% prop-heading "lockToCameraDirection" %}}
> **bool**

### {{% prop-heading "firstPersonEnable" %}}
> **bool**

### {{% prop-heading "characterLightEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterLightingComponentData](/vext/ref/fb/characterlightingcomponentdata) type.

