---
title: TransformModifierEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[TransformModifierEntityData](#constructor-0)**() |
| **[TransformModifierEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TransformModifierEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TransformModifierEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TransformModifierEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TransformModifierEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "left" >}} | [ModifierAxis](/vext/ref/fb/modifieraxis) |
| {{< prop "up" >}} | [ModifierAxis](/vext/ref/fb/modifieraxis) |
| {{< prop "forward" >}} | [ModifierAxis](/vext/ref/fb/modifieraxis) |
| {{< prop "invertLeft" >}} | bool |
| {{< prop "invertUp" >}} | bool |
| {{< prop "invertForward" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TransformModifierEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TransformModifierEntityData {#constructor-0}
> **TransformModifierEntityData**()

Creates a new [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata) frostbite instance.

### TransformModifierEntityData {#constructor-1}
> **TransformModifierEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TransformModifierEntityData {#constructor-2}
> **TransformModifierEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). |

### TransformModifierEntityData {#constructor-3}
> **TransformModifierEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). |

### TransformModifierEntityData {#constructor-4}
> **TransformModifierEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). |

### TransformModifierEntityData {#constructor-5}
> **TransformModifierEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "left" %}}
> **[ModifierAxis](/vext/ref/fb/modifieraxis)**

### {{% prop-heading "up" %}}
> **[ModifierAxis](/vext/ref/fb/modifieraxis)**

### {{% prop-heading "forward" %}}
> **[ModifierAxis](/vext/ref/fb/modifieraxis)**

### {{% prop-heading "invertLeft" %}}
> **bool**

### {{% prop-heading "invertUp" %}}
> **bool**

### {{% prop-heading "invertForward" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TransformModifierEntityData](/vext/ref/fb/transformmodifierentitydata) type.

