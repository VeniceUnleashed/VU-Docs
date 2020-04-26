---
title: TransformSnapToGroundEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[TransformSnapToGroundEntityData](#constructor-0)**() |
| **[TransformSnapToGroundEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TransformSnapToGroundEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TransformSnapToGroundEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TransformSnapToGroundEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TransformSnapToGroundEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "distanceToGround" >}} | float |
| {{< prop "rayCastLength" >}} | float |
| {{< prop "rayCastUpOffset" >}} | float |
| {{< prop "alignWithGroundNormal" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TransformSnapToGroundEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TransformSnapToGroundEntityData {#constructor-0}
> **TransformSnapToGroundEntityData**()

Creates a new [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata) frostbite instance.

### TransformSnapToGroundEntityData {#constructor-1}
> **TransformSnapToGroundEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TransformSnapToGroundEntityData {#constructor-2}
> **TransformSnapToGroundEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). |

### TransformSnapToGroundEntityData {#constructor-3}
> **TransformSnapToGroundEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). |

### TransformSnapToGroundEntityData {#constructor-4}
> **TransformSnapToGroundEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). |

### TransformSnapToGroundEntityData {#constructor-5}
> **TransformSnapToGroundEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "distanceToGround" %}}
> **float**

### {{% prop-heading "rayCastLength" %}}
> **float**

### {{% prop-heading "rayCastUpOffset" %}}
> **float**

### {{% prop-heading "alignWithGroundNormal" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata) type.

