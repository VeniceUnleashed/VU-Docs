---
title: AnimationSignalEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[AnimationSignalEntityData](#constructor-0)**() |
| **[AnimationSignalEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AnimationSignalEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AnimationSignalEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimationSignalEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimationSignalEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "signal" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "intGameState" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "floatGameState" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "valueInt" >}} | int |
| {{< prop "valueFloat" >}} | float |
| {{< prop "reset" >}} | bool |
| {{< prop "continuous" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimationSignalEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimationSignalEntityData {#constructor-0}
> **AnimationSignalEntityData**()

Creates a new [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata) frostbite instance.

### AnimationSignalEntityData {#constructor-1}
> **AnimationSignalEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AnimationSignalEntityData {#constructor-2}
> **AnimationSignalEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). |

### AnimationSignalEntityData {#constructor-3}
> **AnimationSignalEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). |

### AnimationSignalEntityData {#constructor-4}
> **AnimationSignalEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). |

### AnimationSignalEntityData {#constructor-5}
> **AnimationSignalEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "signal" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "intGameState" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "floatGameState" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "valueInt" %}}
> **int**

### {{% prop-heading "valueFloat" %}}
> **float**

### {{% prop-heading "reset" %}}
> **bool**

### {{% prop-heading "continuous" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimationSignalEntityData](/vext/ref/fb/animationsignalentitydata) type.

